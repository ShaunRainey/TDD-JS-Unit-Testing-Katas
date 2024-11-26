const sentenceToCamelCase = require("./sentence-to-camel-case")


describe("sentenceToCamelCase", () => {
    test("returns a single word in the correct case", ()=> {
        let output = sentenceToCamelCase("hello", true);
        expect(output).toBe("Hello");
        output = sentenceToCamelCase("hello", false);
        expect(output).toBe("hello");
    })
    test("returns correct sentence for numerous words", () => {
        let output = sentenceToCamelCase("This Bigger strange Sentence", true)
        expect(output).toBe("ThisBiggerStrangeSentence")
        output = sentenceToCamelCase("This Bigger strange Sentence", false)
        expect(output).toBe("thisBiggerStrangeSentence")
        output = sentenceToCamelCase("this sentence", false)
        expect(output).toBe("thisSentence")
    })
})