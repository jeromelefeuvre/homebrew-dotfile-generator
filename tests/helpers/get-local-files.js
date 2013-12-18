// Generated by CoffeeScript 1.6.3
(function() {
  var chai, chaiAsPromised, getLocalFiles, should;

  chai = require('chai');

  should = require('chai').should();

  chaiAsPromised = require("chai-as-promised");

  getLocalFiles = require('../../helpers/get-local-files');

  chai.use(chaiAsPromised);

  describe("get local files", function() {
    var files;
    files = [];
    before(function() {
      return files = getLocalFiles('./helpers');
    });
    it("should return correct number of files", function(done) {
      return files.should.be.fulfilled.and.notify(done);
    });
    return it("should return correct number of items", function(done) {
      return files.should.eventually.have.length(5).and.notify(done);
    });
  });

}).call(this);