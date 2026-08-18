import reverseString from "./reverseString";

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("returns an empty string if the input is an empty string", () => {
  expect(reverseString("")).toBe("");
});

test("reverses a string with special characters", () => {
  expect(reverseString("!hello")).toBe("olleh!");
});

test("reverses a string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});
