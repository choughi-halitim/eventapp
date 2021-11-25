// test/integration/controllers/UserController.test.js
var supertest = require('supertest');
const {expect} = require('chai');
const moment = require('moment');

describe('Get Events', function() {

  describe('#getEvents()', function() {

    const start = moment().toISOString();
    const end = moment(start).add(1, 'days').toISOString();

    it('should get 5 event', function (done) {

      supertest(sails.hooks.http.app).get('/api/v1/events').send().expect(200).end((err, response) => {

        if (err) return done(new Error(err));

        const { count, rows } = response.body;

        expect(count).to.equal(4);

        expect(rows.length).to.equal(4);

        expect(rows[count -1].name).to.equal('Event 4');

        expect(rows[count -1].description).to.equal('Event 4 time utc + -09:00 sur heure début 00:00 fin 23:59');

        expect(moment(rows[count -1].start).isBefore(moment(rows[count -1].end))).to.equal(true);

        done();

      });

    });

  });

});
