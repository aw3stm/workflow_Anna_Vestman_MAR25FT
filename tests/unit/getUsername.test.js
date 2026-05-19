//Vitest unit testing
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { getUsername } from "../../js/utils/storage";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  afterEach(() => {
    localStorage.clear();
  });
  it("returns the name of the user object in storage", () => {
    const mockUser = {
      name: "Bob Bobson",
      email: "bob@example.com",
    };
    localStorage.setItem("user", JSON.stringify(mockUser));

    expect(getUsername()).toBe("Bob Bobson");
  });
  it("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
