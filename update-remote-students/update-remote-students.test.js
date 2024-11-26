const updateRemoteStudents = require("./update-remote-students")

describe("updateRemoteStudents", () => {
    test("Function is pure", () => {
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ];
        const cloneInput = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ];
        const output = updateRemoteStudents(input)
        expect(input).toEqual(cloneInput) //tests that the input isn't mutated
        expect(input).not.toBe(output); //tests to see that we create a new object
    })
    test("Can add remote to a single student", () => {
        const output = updateRemoteStudents([{ name: 'Euler', age: 27 }]);
        expect(output).toEqual([{ name: 'Euler', age: 27, location: "remote" }])
    })
    test("Will ignore a single student already with a location", () => {
        const output = updateRemoteStudents([{ name: 'Hypatia', age: 31, location: 'leeds' }]);
        expect(output).toEqual([{ name: 'Hypatia', age: 31, location: 'leeds' }])
    })
    test("Will return intended array for multiple students", () => {
        const output = updateRemoteStudents([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }
          ]);
        const expected = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }
          ];
        expect(output).toEqual(expected)
    })
})