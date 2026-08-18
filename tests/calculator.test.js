import calculator from "./calculator";

describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-2, 3)).toBe(1);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(4, 5)).toBe(20);
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(-6, 3)).toBe(-2);
  });
});
