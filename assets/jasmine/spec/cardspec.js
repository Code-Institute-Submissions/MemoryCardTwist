describe("Calculator", function() {
    describe("Addition Testing", function() {
        it("should return 42", function() {
            expect(addition(20, 22)).toBe(42);
        });
        it("should return 26", function() {
            expect(addition(19, 7)).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
            expect(addition("Hitchhikers", "Guide")).toBe("Error!");
        });
    });
});