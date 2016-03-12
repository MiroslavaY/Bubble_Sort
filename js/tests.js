/* Created by Miroslava Yaremenko on 08.03.2016.*/

mocha.ui("bdd");
mocha.reporter("html");
var expect = chai.expect;

describe("DOM tests", function() {

    var resetButton = document.getElementById("reset");
    var stepButton = document.getElementById("stepClick");
    var arrBlock = document.getElementById('arrayBlock');

    it("Container for array exists in the DOM",function() {
        expect(arrBlock.getAttribute("id")).to.equal("arrayBlock");
    });
    it("Reset button exists in the DOM", function() {
        expect(resetButton.getAttribute("type")).to.equal("button");
    });
    it("Step button exists in the DOM", function() {
        expect(stepButton.getAttribute("type")).to.equal("button");
    });
});