import { expect, describe, it } from "vitest";
import { isActivePath } from "../../js/utils/userInterface";

//Vitest (Unit testing)

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/home", "/home")).toBe(true);
    expect(isActivePath("/products", "/products")).toBe(true);
  });
  it("returns true for root path ('/) when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });
  it("returns true when current path includes href", () => {
    expect(isActivePath("/about", "/about/contact")).toBe(true);
    expect(isActivePath("/profile", "/profile/settings")).toBe(true);
  });
  it("returns false when paths don't match", () => {
    expect(isActivePath("/about", "/dashboard")).toBe(false);
    expect(isActivePath("/profile", "/products")).toBe(false);
  });
});
