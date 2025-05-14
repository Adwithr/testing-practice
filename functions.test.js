import { capitalize, reverseString } from "./functions.js";

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
