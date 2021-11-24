/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

const moment = require('moment');
module.exports.bootstrap = async function() {

  if ((sails.config.custom.environment === 'development' || sails.config.custom.environment === 'test') && sails.config.models.migrate === 'drop') {

    const mockEvent = await KumojinEvent.bulkCreateSafe([{

      name: 'Event 1',

      description: 'Event 1 time utc +01:00 sur heure début 00:00 fin 23:59',

      start: moment().startOf('day').utcOffset('+01:00', true).toISOString(true),

      end: moment().endOf('day').utcOffset('+01:00', true).toISOString(true),

    }, {

        name: 'Event 2',

        description: 'Event 2 time utc +00:00 sur heure début 00:00 fin 23:59',

        start: moment().startOf('day').utcOffset('+00:00', true).toISOString(true),

        end: moment().endOf('day').utcOffset('+00:00', true).toISOString(true),

    }, {

      name: 'Event 3',

      description: 'Event 3 time utc + +09:00 sur heure début 00:00 fin 23:59',

      start: moment().startOf('day').utcOffset('+09:00', true).toISOString(true),

      end: moment().endOf('day').utcOffset('+09:00', true).toISOString(true),

    }, {

      name: 'Event 4',

      description: 'Event 4 time utc + -09:00 sur heure début 00:00 fin 23:59',

      start: moment().startOf('day').utcOffset('-09:00', true).toISOString(true),

      end: moment().endOf('day').utcOffset('-09:00', true).toISOString(true),

    }]);

  }

};
