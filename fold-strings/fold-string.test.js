const foldString = require("./fold-string")

describe("foldString", () => {
    test("folds a single word string", () => {
        let output = foldString("Fool");
        expect(output).toBe("oFlo")
        output = foldString("code");
        expect(output).toBe("oced")
    })
    test("folds a single word string with odd letters, keeping the middle letter the same", () => {
        let output = foldString("Fools");
        expect(output).toBe("oFosl");
        output = foldString("Northcoders");
        expect(output).toBe("htroNcsredo")
    })
    test("folds a multiple word string", () => {
        let output = foldString("javascript is cool");
        expect(output).toBe("savajtpirc is oclo");
    })
})

