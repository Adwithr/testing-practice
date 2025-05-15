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

export function ceaserCipher(text, shift) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      const code = text.charCodeAt(i);
      let shiftedCode;

      if (char >= "a" && char <= "z") {
        shiftedCode = ((((code - 97 + shift) % 26) + 26) % 26) + 97;
      } else if (char >= "A" && char <= "Z") {
        shiftedCode = ((((code - 65 + shift) % 26) + 26) % 26) + 65;
      }
      result += String.fromCharCode(shiftedCode);
    } else {
      result += char;
    }
  }
  return result;
}
