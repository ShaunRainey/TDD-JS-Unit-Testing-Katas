const herdTheBabies = require("./herd-the-babies")

describe("herdTheBabies", () => {
    test("Can organise a string with upper and lower case versions of 1 letter", () => {
        let output = herdTheBabies("aA");
        expect(output).toBe("Aa");
        output= herdTheBabies("Aa");
        expect(output).toBe("Aa");
        output= herdTheBabies("AaaaaaaaAaA");
        expect(output).toBe("AAAaaaaaaaa");
    })
    test("Can organise a string with upper and lower case versions of 1 letter", () => {
        let output = herdTheBabies("aBA");
        expect(output).toBe("AaB");
        output= herdTheBabies("bbaBccAC");
        expect(output).toBe('AaBbbCcc');
        output= herdTheBabies("AaBbbBaAbAbbAbB");
        expect(output).toBe("AAAAaaBBBbbbbbb");
    })
})