module.exports = {


  friendlyName: 'POST EVENT',


  description: 'Create a kumojin event',

  inputs: {

    name:         { type: 'string', maxLength: 32, required: true},

    description:  { type: 'string', maxLength: 1000, required: true},

    startDate:    { type: 'string', required: true},

    endDate:    { type: 'string', required: true},

  },

  exits: {

    success:    {  statusCode: 201 },

    badRequest: {  statusCode: 400 },

  },

  fn: async function ({name, description, startDate, endDate}, exits) {

    try {

      const kumojinEventCreated = await KumojinEvent.createSafe( {

        name: name.trim(),

        description: description.trim(),

        start: startDate,

        end:  endDate,

      });

      return exits.success(kumojinEventCreated);

    } catch (e) {

      throw 'badRequest';

    }

  }

};
