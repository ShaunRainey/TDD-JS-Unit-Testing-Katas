const dnaPairs = require('../dna-pairs.js');

describe("dnaPairs()", () => {
  test('Pairs G to C', () => {
  const output = dnaPairs("G")
  expect(output).toEqual([["G","C"]])
  });
  test('Pairs C to G', () => {
    const output = dnaPairs("C")
    expect(output).toEqual([["C","G"]])
  });
  test('Pairs A to T', () => {
    const output = dnaPairs("A")
    expect(output).toEqual([["A","T"]])
  });
  test('Pairs T to A', () => {
    const output = dnaPairs("G")
    expect(output).toEqual([["G","C"]])
  });
  test('Returns correct array for multiple characters', () => {
    let output = dnaPairs("GGG")
    expect(output).toEqual([["G","C"],["G","C"],["G","C"]])
    output = dnaPairs("GCA")
    expect(output).toEqual([["G","C"],["C","G"],["A","T"]])
    output = dnaPairs("TAT")
    expect(output).toEqual([["T","A"],["A","T"],["T","A"]])
  });
});
