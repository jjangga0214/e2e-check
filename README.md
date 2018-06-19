# e2e-check

> A simple overview about current E2E testing solutions for web apps.

TODO: Add general introduction.

Requirements:

- same tests
- similar structure
- TypeScript
- debugging example
- example screenshot failing test (with source map)

Differences:

- Cypress runs inside browser, everyone else runs a Node process
  - If you need non-browser information (check mails, logs, etc.), make a request from Cypress to a local server-
- Use Puppeteer to use the same browser version in CI and for local tests (exception: Cypress uses bundled Electron version)
- Cypress allways waits until?

Nice to haves:

- Screenrecording/screenshots
