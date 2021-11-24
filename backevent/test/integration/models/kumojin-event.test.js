describe('KumojinEvent (Model)', () => {

  describe('Create a Kumojin Event', () => {

    it('should return 1 event', async (done) => {

      const start = moment();

      const end = moment().add(1 , 'hours');

      const events = await  KumojinEvent.createSafe({

        name: 'test 1', description: 'desc 1', start: start, end: end

      });

      if (events && events.length !== 1) {
        return done(new Error(''));
      }

      return done();

    });

  });

});
