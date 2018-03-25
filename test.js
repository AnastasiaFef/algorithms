var expect = require("chai").expect;

var reverse = require("./reverse");
var reverseInt = require('./reverseInt');

describe("Reverse", function() {
    it("reverses lower case string", function() {
      expect(reverse("banana")).to.equal("ananab");
    });
  
    it("reverses random case string", function() {
      expect(reverse("RamdoMCase")).to.equal("esaCModmaR");
    });
  
    it("reverses string with spases", function() {
      expect(reverse("milk shake")).to.equal("ekahs klim");
    });
  
    it("reverses string with special charachters", function() {
      expect(reverse("/:+&*#")).to.equal("#*&+:/");
    });
  
    it("reverses string with numbers", function() {
      expect(reverse('10971')).to.equal("17901");
    });
  });

describe("Reverse Integer", function() {
    it("reverses number", function() {
      expect(reverseInt(983)).to.equal(389);
    });
    it('reverses number, removes 0 in front', function(){
      expect(reverseInt(500)).to.equal(5);
    });
    it('negative number keeps - in front', function(){
      expect(reverseInt(-165)).to.equal(-561);
    });
    it('- up front, no 0 in front', function(){
      expect(reverseInt(-6800)).to.equal(-86);
    });
})