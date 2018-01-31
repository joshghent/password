const api = require('./../password.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');
const should = chai.should();
const expect = chai.expect;
const request = require('supertest');
const assert = require('assert');
const url = 'http://localhost:' + Number(process.env.PORT || 6969);

chai.use(chaiHttp);

describe('Password API', () => {
  it('Will return a password given a number of words', (done) => {
    request(url)
      .put('/4')
      .end((err, res) => {
				expect(res.body.password).to.be.a('string');
				expect(res).to.have.status(200)
        done();
      });
  });
});
