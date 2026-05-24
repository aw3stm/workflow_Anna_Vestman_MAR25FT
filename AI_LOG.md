# AI Log - Workflow Assignment

**Author:** Anna Vestman  
**AI Assistant:** Google Gemini  
**Project:** Workflow Assignment 

This log documents how AI was used.

## Interaction and Troubleshooting Log


**Tooling (Husky & lint-staged)** Unsure if ESLint, Prettier, and Husky were correctly configured in `package.json`. Asked AI to review the configuration files to ensure project requirements were met. AI confirmed the setup but suggested bundling Prettier and ESLint in an array for `*.js` files in `lint-staged` so they run in the correct order and avoid conflicts.

**Unit Testing (Vitest)** Received a "Missing dependency" warning, test crashes from Playwright files, and a failing test for `isActivePath`. Pasted terminal error messages to understand why the tests were failing. AI explained the need for `jsdom` for DOM manipulation in tests. Learned to separate E2E files from the Unit folder, and found a logical error where arguments were passed to `isActivePath` in the wrong order.

**E2E Testing (Playwright)** Playwright threw a "Test timeout of 30000ms exceeded" error during the navigation test. Asked why Playwright couldn't find the venue cards on the page. AI explained the concept of `baseURL` and helped modify the configuration so Playwright used Vite (`http://localhost:5173`) instead of `live-server` in the background. 

**API Integration (Troubleshooting)** Received a "Status 500" (Internal Server Error) followed by `venues.map is not a function`. Used AI to decipher the network error and debug the render function. AI explained that Noroff API v1 was unstable and we migrated to v2. Received help adapting the code to the new data structure (looping over `response.data` and fetching images from `media[0].url`). 

**GitHub Actions (CI/CD)** The Pull Request pipeline crashed due to a missing script (`npm run unit`) and missing environment variables for E2E login. Submitted screenshots from the GitHub interface to interpret the error. Corrected the script names in the `.yml` file to `test:unit`. AI guided me through setting up GitHub Secrets (`TEST_USERNAME` / `TEST_PASSWORD`) and injecting them into the YAML file's `env` block so the tests could pass.

## Summary
AI primarily acted as a mentor to decipher complex error messages in the terminal (especially conflicts between testing frameworks and CI/CD environments) and to explain *why* certain configurations are required.