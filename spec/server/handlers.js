const assert = require('assert');
const http = require('http');

describe('hello world', () => {
    describe('inner', () => {
        it('Should work', () => {
            assert.equal(1, 1);
        });
    });
});

describe('index "/"', () => {
    it('Should return 404', (done) => {
        http.get('http://localhost:3000', (res) => {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

describe('dev server', () => {
    it('Should return 200', (done) => {
        http.get('http://localhost:8080', (res) => {
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
                donde();
            });
        });
    });
});