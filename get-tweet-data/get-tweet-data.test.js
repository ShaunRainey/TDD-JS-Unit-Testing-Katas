const getTweetData = require("./get-tweet-data")

describe("getTweetData",() => {
    test("Returns an object with the correct keys", () => {
        const output = getTweetData("")
        expect(output).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length:0 })
    })
    test("Returns an object with the correct length", () => {
        const output = getTweetData("hello")
        expect(output).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length:5 })
    })
    test("Returns an object with the correct tag count", () => {
        let output = getTweetData("hello #polite")
        expect(output).toEqual({ tags: ["#polite"], mentions: [], tagCount: 1, mentionCount: 0, length:13 })
        output = getTweetData("#fry #fry")
        expect(output).toEqual({ tags: ["#fry"], mentions: [], tagCount: 1, mentionCount: 0, length:9 })
        output = getTweetData("#fry #fry #chicky #chick")
        expect(output).toEqual({ tags: ["#fry", "#chicky", "#chick"], mentions: [], tagCount: 3, mentionCount: 0, length:24 })
    })
    test("Returns an object with the correct mention count", () => {
        let output = getTweetData("hello @northcoders")
        expect(output).toEqual({ tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length:18 })
        output = getTweetData("hey @northcoders, say something @northcoders")
        expect(output).toEqual({ tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length:44 })
        output = getTweetData("hello @Earth & @Mars ")
        expect(output).toEqual({ tags: [], mentions: ["@Earth", "@Mars"], tagCount: 0, mentionCount: 2, length:21 })
    })
    test("Does all of the above in one go", () => {
        let output = getTweetData("Hey @popeyes, where's my #fryfry #chicky #chick")
        expect(output).toEqual({ tags: ["#fryfry", "#chicky", "#chick"], mentions: ["@popeyes"], tagCount: 3, mentionCount: 1, length:47 })
        output = getTweetData("Hey @kfc, #step #it #up, @popeyes coming for you")
        expect(output).toEqual({ tags: ["#step", "#it", "#up"], mentions: ["@kfc","@popeyes"], tagCount: 3, mentionCount: 2, length:48 })
        output = getTweetData("Damn @kfc @popeyes, going to need a #bankloan if you carry on, #expensive@$$chicken @santander")
        expect(output).toEqual({ tags: ["#bankloan", "#expensive"], mentions: ["@kfc","@popeyes", "@santander"], tagCount: 2, mentionCount: 3, length:94 })
    })

})