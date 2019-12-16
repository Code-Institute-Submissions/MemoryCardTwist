/*describe("Calculator", function() {
    beforeEach(function() {
        calc = new Calculator;
    });
    describe("Addition Testing", function() {
        it("should return 42", function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});*/

describe('Player Name Input', function() {
    it('null should return Guest',
        function() {
            expect(playerNameInput("")).toBe("Guest");
        });
    it('"" should return Guest',
        function() {
            expect(playerNameInput("")).toBe("Guest");
        });
    it('exampleName should return Guest',
        function() {
            expect(playerNameInput("Ready Player One")).toBe("Guest");
        });
    it("Stephen should return Stephen",
        function() {
            expect(playerNameInput("Stephen")).toBe("Stephen");
        });
});