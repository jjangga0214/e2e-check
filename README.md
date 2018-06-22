# e2e-check

> A simple overview about current E2E testing solutions for web apps.

## Introduction

For several years we used Selenium for E2E-testing our web applications. We started by using [`protractor`](https://www.protractortest.org) and then switch to using [`selenium-webdriver`](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver) directly. In the beginning we used a custom Selenium grid to test our applications on several browsers including different Internet explorer versions, Chrome, Safari and Firefox.

We hade a _lot_ of problems with this approach:
- The selenium grid itself was very flaky.
- Updating and maintaining the grid was cumbersome.
- Developers updated their browsers on developer machines more often, so we used different browser versions on CI vs. locally.
- Debugging was quite hard the way selenium handled their asynchronous APIs (e.g. bad stack traces). (This now becomes better by native `async`/`await` support.) 
- Sometimes the same API which worked in 9 cases didn't work on the 10th case. (E.g. clicking a button wasn't possible in test case 10 without a logical reason like being invisible or covered by a different element. It just didn't work.)
- Sometimes the same API worked in _nth_ browsers in _nth_ versions, but not in Firefox 33 for example for now no clear reason.
- Some Selenium versions are only compatible to browsers in version X.
- It was hard to maintain the tests.

All in all having nice and stable automatic cross browser testing was just a dream.

Some months ago we switched to only test with Selenium on [`Puppeteer`](https://github.com/GoogleChrome/puppeteer). We lost (flaky) cross browser testing, but reduces maintenance time by a magnitude and our tests become _much_ more stable - so the E2E tests became actually useful again. (Cross browser testing is nice, but it solves no problem, if it isn't reliable.) The time we saved in maintenance could be invested in manual cross browser tests when needed. (Cross browser compatibility of our web technology is not perfect - there are so many browser quirks -, but it became definitely better in the last years, so you don't have as many browser specific bugs as we had ten years ago in my experience. At least if you mostly use battle tested frameworks, established patterns and no experimental APIs.)

We gained other benefits by this approach as well. Puppeteer automatically installs a local copy of Chrome in a specific browser version, so developers and CI finally use the exact same environment for tests. Puppeteer can also run headless which helps in a lot of CI systems.

Nevertheless we still had problems like the one mentioned above: You click 9 buttons and everything works fine, but the 10th button can't be clicked for unknown reasons. And sometimes you have to update Puppeteer and occasionally break a test because of this. I can't say for sure that Selenium caused these problems, but my guess is if we would write our tests directly in Puppeteer it would be more likely to eliminate this point of failure as well. 

Why did we still had Selenium tests at all and haven't used Puppeteer directly? Well, every test was already written and using _both_ helped us to migrate and play around with Puppeteer. And if we'd ever _need_ to test something in a different browser, it would be quite easy...

But now as we try to use _just_ Puppeteer and give up on _automatic_ cross browser testing, we could have a look on other projects as well, before we settle on a solution. So we planned a small discovery. Write the same tests in four E2E testing frameworks: Selenium (with Puppeteer), _pure_ Puppeteer, [`testcafe`](https://github.com/DevExpress/testcafe) and [`Cypress`](https://www.cypress.io/).

Below you'll find an outline about our project requirements and some key differences between the frameworks. You'll find the test cases in the `packages/` directory. I will not explain the frameworks in depth, I'd recommend to checkout the example yourself to see if you like the APIs of the different framerworks.

## Test scenario

Really basic and just a starting point.
- Check Githubs homepage and verify the title and sign up button.
- Check Googles homepage and verify the title and search button.
- Use Googles search form.

## Requirements

We try to
- test the same functionality in every project
- write the tests and configs in a similar structure for easier comparison
- use TypeScript, because we ️❤️ TypeScript
- showcase a debugging example
- use [`Jest`](https://facebook.github.io/jest/) if possible (because it has a nice API and we use it for unit tests as well)

## Differences

- Cypress runs inside the browser, while every other framework runs a Node process
  - If you need non-browser information (check mails, logs, etc.) in Cypress, you essentially need to start a local Node server which can than be queried for certain informations by your Cypress tests. (E.g. your test can request `localhost:8080/did-i-got-my-email` and the local server will serve you a useful response.)
- Cypress uses a bundled Eletron version to support testing the same browser in the same version on CI and locally. AFAIK it isn't the only framework where I can't use Puppeteer directly. (Just nice to know - not a real drawback.)
- Cypress seems to always offer synchronous APIs, I guess because it runs directly in the browser...?
- Cypress and testcase come with their own test runners - no Jest love here 😞
- Cypress creates awesome videos with a nice GUI showing information about your tests out of the box 😍
- `@types/puppeteer` could need some love, but nothing a pull request couldn't fix 👌 
- Puppeteers waits until functionality is very basic. `waitForFunction` is evaluated in browser context. If you need to await something on the Node side you'll need a helper lib like [`async-wait-until`](https://github.com/devlato/waitUntil).
- Testcafe seems to automatically await certain assertions and conditions. 

## TODOs

- finish "showcase a debugging example"
- use Jest Puppeteer preset correctly, so we don't need to set global setup and teardown
- try [`puppeteer-recorder`](https://www.npmjs.com/package/puppeteer-recorder) for recording the test screens