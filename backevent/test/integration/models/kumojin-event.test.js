const moment = require('moment');

describe('KumojinEvent (Model)', function() {

  describe('Create a Kumojin Event', function() {

    it('should return 1 event', function(done) {

      const start = moment();

      const end = moment().add(1 , 'hours');

      KumojinEvent.createSafe({

        name: 'test 1', description: 'desc 1', start: start, end: end


      }).then((event) => {

        return done();

      }).catch(() => {

        return done(new Error(''));

      });

    });

  });

});
