var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

describe('Check the text', function () {
  it('should greet the user', function (done) {
    request(app)
      .get('/')
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.text).to.contain('Hello world');
        done();
      });
  });
});
