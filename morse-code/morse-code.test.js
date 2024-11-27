const morseCode = require("./morse-code")

describe("MorseCode to String", () => {
    test("Can translate single characters", () => {
        let output = morseCode("--...",false);
        expect(output).toBe("7")
        output = morseCode("..",false);
        expect(output).toBe("I")
        output = morseCode("..-.",false);
        expect(output).toBe("F")
        output = morseCode("-.",false);
        expect(output).toBe("N")
    })
    test("Can translate single words", () => {
        let output = morseCode(".... . .-.. .-.. ---",false);
        expect(output).toBe("HELLO");
        output = morseCode("-. --- .-. - .... -.-. --- -.. . .-. ...",false);
        expect(output).toBe("NORTHCODERS");
    })
    test("Can translate multiple words", () => {
        let output = morseCode("--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...",false);
        expect(output).toBe("GOOD MORNING NORTHCODERS");
    })
})

describe("String to morse code", () => {
    test("Can translate single characters", () => {
        let output = morseCode("7",true);
        expect(output).toBe("--...")
    })
    test("Can translate single words", () => {
        let output = morseCode("HELLO",true);
        expect(output).toBe(".... . .-.. .-.. ---");
        output = morseCode("NORTHCODERS", true);
        expect(output).toBe("-. --- .-. - .... -.-. --- -.. . .-. ...");
    })
    test("Can translate multiple words", () => {
        let output = morseCode("GOOD MORNING NORTHCODERS",true);
        expect(output).toBe("--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...");
    })
})