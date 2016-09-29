const assert = require('assert');
const should = require('should');
const http = require('http');
const utils = require('../../server/utils');

describe('hello world', () => {
  describe('inner', () => {
    it('Should work', () => {
      assert.equal(1, 1);
    });
  });
});

describe('Routing to index', () => {
  it('Should return 200', (done) => {
    http.get('http://localhost:3000', (res) => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('Dev Server Response', () => {
  it('Should return 200', (done) => {
    http.get('http://localhost:8080', (res) => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('MongoDB', () => {
  it('Should return data from challenges schema', (done) => {
    http.get('http://localhost:8080/regex/challenges', (res) => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('Database Work: ', () => {
  describe('Retrieving challenges', () => {
      it('Should respond with an array of data', () => {
          http.get('http://localhost:3000/regex/challenges', (res) => {
              assert(Array.isArray(res));
              done();
          });
      });
  });
});

describe('Utils', () => {
  describe('parseChallengeName', () => {
    it('Should parse challenge names into url strings', () => {
      assert.equal(utils.parseChallengeName('Hello World'), 'hello-world');
      assert.equal(utils.parseChallengeName('Troy is the freaking worst!'), 'troy-is-the-freaking-worst');
    })
  })
})