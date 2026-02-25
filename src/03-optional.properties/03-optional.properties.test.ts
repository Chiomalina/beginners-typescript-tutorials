import { expect, it } from "vitest";
import { getName } from "./03-optional.properties";

it("Should work with just the first name", () => {
  expect(getName({ first: "Matt" })).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  expect(getName({ first: "Matt", last: "Pocock" })).toEqual("Matt Pocock");
});
