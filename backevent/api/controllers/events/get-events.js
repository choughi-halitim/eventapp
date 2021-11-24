const { Op } = require('sequelize');

module.exports = {

  friendlyName: 'GET EVENTS',

  description: 'Get all events',

  extendedDescription:  'Get all events',

  inputs: { queryFilter: { type: 'string' } },

  exits: { success: {  statusCode: 200 } },

  fn: async function ({ queryFilter }, exits) {

    let options = { };

    if (queryFilter) {

      options.where = {

        [Op.or]: [ { name: { [Op.like]: `%${queryFilter}%` }, description: { [Op.like]: `%${queryFilter}%` } } ]

      };

    }

    const events = await KumojinEvent.findAndCountAll(options);

    return exits.success(events);

  }

};
