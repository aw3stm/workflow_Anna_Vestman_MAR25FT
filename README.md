# Workflow Assignment - Holidaze Venues

This project is a front-end application built to demonstrate a professional development workflow. It includes automated code formatting, linting, unit testing, and end-to-end (E2E) testing to ensure high code quality and reliability.

## Getting Started

Follow these instructions to get a copy of the project up and running.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. Clone the repository to your local machine.
2. Open your terminal, navigate to the project folder and run the following command to install all dependencies:

```bash
npm install
```

## Environment Variables

To run the Playwright e2e tests for the login functionality, you need to provide test credentials.

1. Create a file named **.env**
2. Add the following required environment variables (replace with your actual test account details):

```
TEST_USERNAME=your_test_email@stud.noroff.no
TEST_PASSWORD=your_test_password
```

**_Important_: Never commit your actual .env file to version control. .env.example file is included in the repo as a template.**

## 📃 Scripts

You can run the following commands:

### Development and Build

```
npm run dev - Starts the Vite dev server.
npm run build - Bundles the app into static files for production.
npm run preview - Preview the production build
```

### Linting and Formatting

```
npm run lint - Find and report errors in JS files.
npm run format - Runs prettier to auto format all supported files (.js, .html, .css, .md)
```

## Testing

```
npm run test:unit - Runs the unit tests using Vitest.
npm run test:unit:watch - Runs Vitest in watch mode.
npm run test:e2e - Runs the end-to-end tests using Playwright.
npm run test:e2e:ui - Opens the Playwright UI mode.
```

**When running e2e tests, the config auto starts the local Vite server in the background.**

## 🔨 Workflow and Git Hooks

This project uses Husky and lint-staged to enforce code quality before code is committed.

When running **git commit**, the pre-commit hook will automatically:

1. Format staged HTML and JS files using Prettier.
2. Lint staged JS files using ESLint.

**If any ESLint errors cannot be auto fixed, the commit will be aborted.**

### ✅ Test Results

All automated tests have been successfully executed.

- **Unit Tests (Vitest):** Verified the logic for routing (i`sActivePath`) and storage retrieval (`getUsername`).
- **E2E Tests (Playwright):** User flows for:
- Sign in with valid credentials.
- Receiving error message with invalid credentials.
- Navigating from the home page to a specific venue details page.
