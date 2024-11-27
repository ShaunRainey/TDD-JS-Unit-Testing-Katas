const pigLatin = require("./pig-latin")

describe("pigLatin", () => {
    test("if a word starts with a consonant (or consecutive consonants), the first consonant(s) is moved to the end, followed by \"ay\" ", () => {
        const output = pigLatin("northcoders");
        expect(output).toBe("orthcodersnay");
    })  
    test("If a word starts with a vowel, \"way\" is appended to the end ", () => {
        const output = pigLatin("algorithm");
        expect(output).toBe("algorithmway");
    }) 
    test("Follows the above behaviour for a string of multiple words", () => {
        const output = pigLatin("keep on coding");
        expect(output).toBe("eepkay onway odingcay");
    })
})