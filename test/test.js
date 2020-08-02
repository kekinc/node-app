const app = require('../index'),
request = require('supertest');

describe('GET /', ()=>{
    it('should respond with Hello to node-express world!',(done)=>{
        request(app).get('/').expect('Hello! This is massive change.',done);
    });
});
