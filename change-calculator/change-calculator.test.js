const changeCalculator = require("./change-calculator")

describe("changeCalculator", () => {
    test("When given a value equal to a single coin, returns that coin", () => {
        let output = changeCalculator(200);
        expect(output).toEqual({"£2":1});
        output = changeCalculator(100);
        expect(output).toEqual({"£1":1});
        output = changeCalculator(50);
        expect(output).toEqual({"50p":1});
        output = changeCalculator(20);
        expect(output).toEqual({"20p":1});
        output = changeCalculator(10);
        expect(output).toEqual({"10p":1});
        output = changeCalculator(5);
        expect(output).toEqual({"5p":1});
        output = changeCalculator(2);
        expect(output).toEqual({"2p":1});
        output = changeCalculator(1);
        expect(output).toEqual({"1p":1});
        output = changeCalculator(0);
        expect(output).toEqual("No coins for you!");
    })
    test("Gives correct output where numerous coins are required", () => {
        let output = changeCalculator(7);
        expect(output).toEqual({'5p': 1, '2p': 1});
        output = changeCalculator(13);
        expect(output).toEqual({'10p': 1, '2p': 1, '1p': 1});
        output = changeCalculator(3134)
        expect(output).toEqual({ '£2': 15, '£1': 1, '20p': 1, '10p': 1, '2p': 2 })
        output = changeCalculator(387)
        expect(output).toEqual({'£2': 1, '£1': 1, '50p': 1, '20p': 1, '10p': 1, '5p': 1, '2p': 1 });
    })
})