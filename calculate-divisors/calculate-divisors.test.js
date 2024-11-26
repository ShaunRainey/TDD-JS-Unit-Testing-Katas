const calculateDivisors = require("./calculate-divisors")

describe("calculateDivisors", () => {
    test("If there are no multiples, return 0", () =>{
        const output = calculateDivisors(2);
        expect(output).toBe(0); 
    })
    test("returns correct input", () => {
        let output = calculateDivisors(1);
        expect(output).toBe(0);
        output = calculateDivisors(5);
        expect(output).toBe(3);
        output = calculateDivisors(6);
        expect(output).toBe(8);
        output = calculateDivisors(10);
        expect(output).toBe(23);
        output = calculateDivisors(12);
        expect(output).toBe(33);
        output = calculateDivisors(1000);
        expect(output).toBe(233168);
    })
})