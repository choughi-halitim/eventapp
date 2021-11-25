// test/integration/controllers/UserController.test.js
var supertest = require('supertest');
const {expect} = require('chai');
const moment = require('moment');

describe('Post Event', function() {

  describe('#postEvent()', function() {

    const start = moment();

    const end = moment(start).add(1, 'days');

    before(function(done) {

      const event =  { name: 'My Event', description: 'My event description', start: start, end: end };

      KumojinEvent.createSafe(event)

        .then(() => { return done(); })

        .catch(() => { return done(new Error("create event")); });

    });

    it('should create an event', function (done) {

      sails.log.debug(sails.hooks.http.app);

      supertest(sails.hooks.http.app).get('/api/v1/events').send().expect(200).end(function (err, response) {

        if (err) return done(new Error(err));

        const { count, rows } = response.body;

        expect(count).to.equal(5);

        expect(rows.length).to.equal(5);

        expect(rows[count -1].name).to.equal('My Event');

        expect(rows[count -1].description).to.equal('My event description');

        expect(moment(rows[count -1].start).isBefore(moment(rows[count -1].end))).to.equal(true);

        done();

      });

    });

  });

});
