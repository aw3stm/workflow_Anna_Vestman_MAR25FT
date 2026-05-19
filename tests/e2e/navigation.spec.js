import { test, expect } from "@playwright/test";

test.describe("Navigation Functionality", () => {
  test("Navigates to home, waits for venues, clicks first venue and verifies heading", async ({
    page,
  }) => {
    await page.goto("/");

    const firstVenueCard = page.locator('a[href^="/venue/?id="]').first();

    await firstVenueCard.waitFor({ state: "visible" });

    await firstVenueCard.click();

    const heading = page.locator("h1");
    await expect(heading).toContainText("Venue details");
  });
});
