import caesarCipher from "./caesarCipher";

describe("caesarCipher", () => {
  test("shifts a letter by the given amount", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });

  test("wraps around the alphabet when shifting past z", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("preserves the case of letters", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("leaves non-alphabetic characters unchanged", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zroug!");
  });
});
