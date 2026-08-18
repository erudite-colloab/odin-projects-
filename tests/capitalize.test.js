import capitalize from "./capitalize";

test("capitalizes the first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("returns the same string if the first character is already capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("returns an empty string if the input is an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("capitalizes the first character of a single-character string", () => {
  expect(capitalize("a")).toBe("A");
});

test("capitalizes the first character of a string with special characters", () => {
  expect(capitalize("!hello")).toBe("!hello");
});
