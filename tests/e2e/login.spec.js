import { test, expect } from "@playwright/test";

test.describe("Login Functionality", () => {
  test("User can successfully sign in with valid credentials", async ({
    page,
  }) => {
    await page.goto("/login/index.html");

    await page.fill('input[type="email"]', process.env.TEST_USERNAME);
    await page.fill('input[type="password"]', process.env.TEST_PASSWORD);

    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/.*index\.html|.*\/$/);
  });

  test("User sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login/index.html");

    await page.fill('input[type="email"]', "wrong@email.com");
    await page.fill('input[type="password"]', "wrongpassword123");
    await page.click('button[type="submit"]');

    const errorMessage = page.locator("#message-container");
    await expect(errorMessage).toBeVisible();
  });
});
