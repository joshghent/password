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
				expect(res).to.have.status(200);
        done();
      });
	});
});

describe('Password Options', () => {
	it('Capital Letters', (done) => {
		request(url)
			.get('/4')
			.query({ mixCasing: true })
			.end((err, res) => {
				expect(res.body.password).to.be.a('string');
				expect(res).to.have.status(200);

				if (res.body.password === res.body.password.toLowerCase()) {
					assert.fail(res.body.password, 'PaSSwoRd', 'No casing detected when requesting mixed case password.');
				}

				done();
			});
	});
	it('Numbers', (done) => {
		request(url)
			.get('/4')
			.query({ includeNumbers: true })
			.end((err, res) => {
				expect(res.body.password).to.be.a('string');
				expect(res).to.have.status(200);

				if (res.body.password.match(/^[^0-9]+$/) === false) {
					assert.fail(res.body.password, 'pa55word', 'No numbers detected when requesting numbers in the password.');
				}

				done();
			});
	});
	it('Special Character', (done) => {
		request(url)
			.get('/4')
			.query({ includeSpecialChars: true })
			.end((err, res) => {
				expect(res.body.password).to.be.a('string');
				expect(res).to.have.status(200);

				if (res.body.password.match(/^[^a-zA-Z0-9]+$/) === false) {
					assert.fail(res.body.password, 'p#ssw&rd', 'No special characters detected when requesting a special characters password.');
				}

				done();
			});
	});
});
