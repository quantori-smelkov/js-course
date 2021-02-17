const { expect } = require("chai");
const { isPalindrome } = require("../palindrome/palindrome");

describe("Palindrome function unit test suite positive scenarios", function () {
    it("It should work with one-worders", async function () {
        expect(isPalindrome("Ada"), "simple one word mixedcase").to.equal(true);
    }),
    it("It should work with expression", async function () {
        expect(isPalindrome("Eva, can I see bees in a cave?"), "expressions mixedcase").to.equal(true);
    }),
    it("Simple scenario with numbers", async function () {
        expect(isPalindrome("8998"), "no punctuations number").to.equal(true);
    }),
    it("Complex scenario with numbers", async function () {
        expect(isPalindrome("8 9,98"), "punctuations number").to.equal(true);
    })
})

describe("Palindrome function unit test suite negative scenarios", function () {
    it("It should work with one-worders", async function () {
        expect(isPalindrome("Adam"), "simple one word mixedcase").to.equal(false);
    }),
    it("It should work with expression", async function () {
        expect(isPalindrome("Eva, can I see bees in a cave, please?"), "expressions mixedcase").to.equal(false);
    }),
    it("Simple scenario with numbers", async function () {
        expect(isPalindrome("89987"), "no punctuations number").to.equal(false);
    }),
    it("Complex scenario with numbers", async function () {
        expect(isPalindrome("8 9,983"), "punctuations number").to.equal(false);
    })
})

