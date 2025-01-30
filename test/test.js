// Importing the Chai library to use its assert method, which offers more features than the built-in Node.js assertions
import { assert } from "chai";
//We are importing our Functions from src/index.js
import {
  helloWorld,
  addition,
  subtraction,
  multiplication,
  division,
  remainder,
  exponentiation,
} from "../src/index.js";

describe("helloWorld Function", () => {
  it("should return a string", () => {
    const result = helloWorld();
    assert.typeOf(result, "string", "The return value should be a string");
  });

  it("should return 'Hello World'", ()=> {
    const result = helloWorld();
    assert.equal(result, "Hello World", "The return value should be 'Hello World'");
  });
});


describe("Addition Function", () => {
  it("should return the sum of two numbers", () => {
    const result = addition(2, 2);
    assert.equal(result, 4, "2 + 2 should equal 4");
  });
});

describe("Subtraction Function", () => {
  it("should return the different of two numbers", () => {
    const result = subtraction(5, 3);
    assert.equal(result, 2, "5 - 3 should equal 2");
  });
});

describe("Multiplication Function", () => {
  it("should return the product of two numbers", () => {
    const result = multiplication(3, 3);
    assert.equal(result, 9, "3 * 3 should equal 9");
  });
});


describe("Division Function", () => {
  it("should return the quotient of two numbers", () => {
    const result = division(10, 2);
    assert.equal(result, 5, "10 / 2 should equal 5");
  });
});

describe("Remainder Function", () => {
  it("should return the remainder of two numbers", () => {
    const result = remainder(5, 2);
    assert. equal(result, 1, "5 % 2 should equal 1");
  });
});

describe("Exponentiation Function", () => {
  it("should return the exponentiation result", () => {
    const result = exponentiation (2, 3);
    assert. equal(result, 8, "2 ^ 3 should equal 8");
  });
});