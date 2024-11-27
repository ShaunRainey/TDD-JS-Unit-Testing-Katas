const rotateArray = require("./rotate-array")

describe("rotateArray", () => {
    test("Can rotate an array forward by one", () => {
        let output = rotateArray([1, 2, 3], 1);
        expect(output).toEqual([3, 1, 2]);
    })
    test("Can rotate an array forward by numerous steps", () => {
        let output = rotateArray([1, 2, 3, 4, 5], 3);
        expect(output).toEqual([3, 4, 5, 1, 2]);
    })
    test("Can rotate an array backward by one", () => {
        let output = rotateArray([1, 2, 3], -1);
        expect(output).toEqual([2, 3, 1]);
    })
    test("Can rotate an array backward by numerous steps", () => {
        let output = rotateArray([1, 2, 3, 4, 5], -3);
        expect(output).toEqual([4, 5, 1, 2, 3]);
    })
    test("Is the function pure? (no mutation)", () => {
        let initialValue = [1, 2, 3, 4, 5];
        let output = rotateArray(initialValue);
        expect(output).not.toBe(initialValue);
        expect(initialValue).toEqual([1, 2, 3, 4, 5]);
    })
})