const {MarkovMachine} = require("./markov");

describe("markov machine class", function () {
    test("class should have a map of words", function(){
        let test = new MarkovMachine(text = "testing string for security");
    
        expect(test.words).toContain("testing");
        expect(test.chains.size).toEqual(4);
    })
    
    test("testing make test method", function(){
        let test = new MarkovMachine(text = "testing string for security");
    
        expect(test.makeText()).toEqual(expect.any(String));
    })
});

