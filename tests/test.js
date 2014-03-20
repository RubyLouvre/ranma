var ranma = require('../ranma');

var expect = require('expect.js');
var fs = require('fs');
var path = require('path');

describe('jslib test', function() {
  describe('backbone', function() {
    it('type', function() {
      var s = fs.readFileSync(path.join(__dirname, './src/backbone.js'), { encoding: 'utf-8' });
      var type = ranma.type.analyse(s);
      expect(type.isCommonJS).to.eql(true);
      expect(type.isAMD).to.eql(false);
      expect(type.isCMD).to.eql(false);
    });
  });
  describe('expect', function() {
    it('type', function() {
      var s = fs.readFileSync(path.join(__dirname, './src/expect.js'), { encoding: 'utf-8' });
      var type = ranma.type.analyse(s);
      expect(type.isCommonJS).to.eql(true);
      expect(type.isAMD).to.eql(false);
      expect(type.isCMD).to.eql(false);
    });
  });
  describe('handlebars', function() {
    it('type', function() {
      var s = fs.readFileSync(path.join(__dirname, './src/handlebars.js'), { encoding: 'utf-8' });
      var type = ranma.type.analyse(s);
      expect(type.isCommonJS).to.eql(false);
      expect(type.isAMD).to.eql(false);
      expect(type.isCMD).to.eql(false);
    });
  });
  describe('Uri', function() {
    it('type', function() {
      var s = fs.readFileSync(path.join(__dirname, './src/Uri.js'), { encoding: 'utf-8' });
      var type = ranma.type.analyse(s);
      expect(type.isCommonJS).to.eql(true);
      expect(type.isAMD).to.eql(true);
      expect(type.isCMD).to.eql(false);
    });
  });
});