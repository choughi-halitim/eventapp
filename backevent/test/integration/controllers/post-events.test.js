// test/integration/controllers/UserController.test.js
var supertest = require('supertest');
const {expect} = require('chai');
const moment = require('moment');

describe('Post Event', function() {

  describe('#postEvent()', function() {

    before(function(done) {

      const start = moment();

      const end = moment(start).add(1, 'days');

      const event =  { name: 'My Event', description: 'My event description', start: start, end: end };

      KumojinEvent.createSafe(event);

      return done();

    });

    it('should create an event', function (done) {

      sails.log.debug(sails.hooks.http.app);

      supertest(sails.hooks.http.app).get('/api/v1/events').send().expect(201).end(function (err, response) {

        if (err) return done(new Error(err));

        const { count, rows } = response;

        expect(count).to.equal(1);

        expect(rows.length).to.equal(1);

        expect(rows[0].name).to.equal('My Event');

        expect(rows[0].description).to.equal('My event description');

        expect(rows[0].start).to.equal(start);

        expect(rows[0].end).to.equal(end);

        return done();

      });

    });

  });

});
