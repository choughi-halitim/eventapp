// test/integration/controllers/UserController.test.js
var supertest = require('supertest');
const {expect} = require('chai');

describe('Get Events', function() {

  describe('#getEvents()', function() {

    before('create 1 event on database test', async() => {

      const start = moment();
      const end = moment(start).add(1, 'days');

      await KumojinApp.createSafe({

        name: 'name 1', description: 'describe event 1', start:start, end: end

      });

    });

    it('should get 1 event', function (done) {


      sails.log.debug(sails.hooks.http.app);

      supertest(sails.hooks.http.app).get('/api/v1/events').send().expect(200, done).end((err, response) => {
        const { count, rows } = response;

        expect(count).to.equal(1);
        expect(rows.length).to.equal(1);
        expect(rows[0].name).to.equal('My Event');
        expect(rows[0].description).to.equal('My event description');
        expect(rows[0].start).to.equal(start);
        expect(rows[0].end).to.equal(end);
      });

      done();
      ;

    });

  });

});
