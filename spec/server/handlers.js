const assert = require('assert');
const http = require('http');

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
