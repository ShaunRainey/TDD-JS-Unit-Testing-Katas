const tillAddition = require("./till-addition")

describe("tillAddition", () => {
    test("Returns £0.00 for an empty till",() => {
        const output = tillAddition({});
        expect(output).toBe("£0.00");
    })
    test("Returns correct value for a single value",() => {
        let output = tillAddition({"1p": 1});
        expect(output).toBe("£0.01");
        output = tillAddition({"50p": 5});
        expect(output).toBe("£2.50");
        output = tillAddition({"£20": 4});
        expect(output).toBe("£80.00");
    })
    test("Correct value for multiple values",() => {
        const output = tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 });
        expect(output).toBe("£1.85");
    })
})