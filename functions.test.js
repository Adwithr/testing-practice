import { capitalize, reverseString, calculator } from "./functions.js";

test("first character of a string is capitalized", () => {
  expect(() => capitalize(2)).toThrow();
  expect(() => capitalize()).toThrow();
  expect(capitalize("welcome")).toBe("Welcome");
});

test("reverse a string", () => {
  expect(() => capitalize(2)).toThrow();
  expect(() => capitalize()).toThrow();
  expect(reverseString("hello")).toBe("olleh");
});

test("calculator", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.subtract(3, 1)).toBe(2);
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.multiply(4, 5)).toBe(20);
});
