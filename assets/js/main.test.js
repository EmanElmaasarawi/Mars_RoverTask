const compute = require("./main");
test("ComputeMe", () => {
    expect(compute("2,4,E","FLFFFRFLB")).toBe("6,4,N");
});