export function capitalize(str) {
  if (typeof str !== "string" || str === undefined) {
    throw new Error("Enter a valid string");
  }
  return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  if (typeof str !== "string" || str === undefined) {
    throw new Error("Enter a valid string");
  }
  return str.split("").reverse().join("");
}

export const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  return { add, subtract, divide, multiply };
})();
