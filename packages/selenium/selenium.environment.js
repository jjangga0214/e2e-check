const { start } = require('selenium-standalone');
const NodeEnvironment = require('jest-environment-node');
const { Builder } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const { executablePath } = require('puppeteer');

const startSelenium = () =>
  new Promise((resolve, reject) => {
    start((err, childProcess) => {
      if (err) {
        reject(err);
      } else {
        // kill selenium server on abrupt 'exit'
        process.on('exit', () => childProcess.kill());
        resolve(childProcess);
      }
    });
  });

class SeleniumEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    await startSelenium();

    const options = new Options();
    options.setChromeBinaryPath(executablePath());
    if (!process.env.DEBUG) {
      options.addArguments('auto-open-devtools-for-tabs'); // this doesn't work, why?
      options.headless();
    }

    const builder = new Builder();
    builder.usingServer('http://localhost:4444/wd/hub');
    builder.forBrowser('chrome');
    builder.setChromeOptions(options);

    const driver = await builder.build();
    this.driver = driver;

    this.global.driver = driver;
  }

  async teardown() {
    if (this.driver) {
      await this.driver.quit();
    }
    await super.teardown();
  }
}

module.exports = SeleniumEnvironment;
