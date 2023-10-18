const http = require('http')
const nock = require('../')
const log = require('./_log')
const events = ['socket', 'response', 'end', 'data']

nock('http://abcpvtltd.com')
  .post('/signUp', {firstName: 'udaiyakumar', lastName: 'dhandapani', email: 'test@gmail.com', password: 'dsjid234', agreeTerms: 'true'})
  .reply(200, { id: '123ABC', firstName: 'udaiyakumar', lastName: 'dhandapani', email: 'test@gmail.com', agreeTerms: 'true' })