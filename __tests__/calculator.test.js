const calculator = require("../calculator");

describe("Calculator tests", () => {
  test("adding 1 + 2 should return 3", () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  test("2 - 2 should NOT return 1", () => {
    expect(calculator.diff(2, 2)).not.toBe(1);
  });

  test("Should return null", () => {
    expect(calculator.isNull()).toBeNull();
  });

  test("Should return falsy", () => {
    // expect(calculator.checkValue(0)).toBeFalsy();
    // expect(calculator.checkValue(null)).toBeFalsy();
    // expect(calculator.checkValue(underfined)).toBeFalsy();
    expect(calculator.checkValue(1)).toBeTruthy();
  });

  test("Should be less than 100", () => {
    const num1 = 50;
    const num2 = 60;
    // expect(num1 + num2).toBeLessThan(100);
    // expect(num1 + num2).toBeLessThan(120);
    // expect(num1 + num2).toBeLessThanOrEqual(110);
    expect(num1 + num2).toBeGreaterThan(90);
  });

  // Regex
  test("Should be character i in ice cream", () => {
    // test for success match
    // expect("ice cream").toMatch(/i/);
    // expect("ice cream").toMatch(/I/i);
    // expect("ce cream").toMatch(/i/);
    // expect("ce cream").toMatch(/e/);

    // test for failure match
    // expect("hi").not.toMatch(/hi/);
    expect("hi").not.toMatch(/hello/);
  });

  // Array
  test("Jest should be in array", () => {
    array = ["Jest", "Unit Testing", "JavaScript"];
    // expect(array).toContain("jest");
    expect(array).toContain("Jest");
  });
});
