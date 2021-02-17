const { expect } = require("chai");
const { isPalindrome } = require("../palindrome/palindrome");

describe("Palindrome function unit test suite positive scenarios", function () {
    it("It should work with one-letter 'A'", async function () {
        expect(isPalindrome("A"), "one letter 'A'").to.equal(true);
    }),
    it("It should work with one-letter 'A;'", async function () {
        expect(isPalindrome("A;"), "one letter and 'A;'").to.equal(true);
    }),
    it("It should work with one-letter ',A;'", async function () {
        expect(isPalindrome(",A;"), "one letter and ',A;").to.equal(true);
    }),
    it("It should work with one-worders 3 letter", async function () {
        expect(isPalindrome("Ada"), "simple one word 3 letter mixedcase").to.equal(true);
    }),
    it("It should work with one-worders 4 letter", async function () {
        expect(isPalindrome("Alla"), "simple one word 4 letter mixedcase").to.equal(true);
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
    it("It should work with empty input null", async function () {
        expect(isPalindrome(null), "empty input null").to.equal(false);
    }),
    it("It should work with empty input {}", async function () {
        expect(isPalindrome({}), "empty input {}").to.equal(false);
    }),
    it("It should work with empty input undefined", async function () {
        expect(isPalindrome(undefined), "empty input undefined").to.equal(false);
    }),
    it("It should work with empty input '  '", async function () {
        expect(isPalindrome("  "), "empty input '  '").to.equal(false);
    }),
    it("It should work with empty input ,,", async function () {
        expect(isPalindrome(",,,"), "empty input ',,'").to.equal(false);
    })
    it("It should work with empty input []", async function () {
        expect(isPalindrome([]), "empty input []").to.equal(false);
    })
    it("It should work with one-worders 3 letter", async function () {
        expect(isPalindrome("Add"), "simple one word 3 letter mixedcase").to.equal(false);
    })
    it("It should work with one-worders 4 letter", async function () {
        expect(isPalindrome("Adam"), "simple one word 4 letter mixedcase").to.equal(false);
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

