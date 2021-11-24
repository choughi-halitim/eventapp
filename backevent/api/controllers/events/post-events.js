module.exports = {


  friendlyName: 'POST EVENT',


  description: 'Create a kumojin event',

  inputs: {

    name:         { type: 'string', maxLength: 32, required: true },

    description:  { type: 'string', maxLength: 1000, required: true },

    start:        { type: 'string', required: true },

    end:          { type: 'string', required: true },

  },

  exits: {

    success:            {  statusCode: 201 },

    badRequest:         {  statusCode: 400 },

    startAfterEndError: { statusCode: 400, message: 'StartDatetimeIsAfterEndDatetimeError' },

  },

  fn: async function ({name, description, start, end}, exits) {

    try {

      const kumojinEventCreated = await KumojinEvent.createSafe( {

        name: name.trim(),

        description: description.trim(),

        start: start,

        end:  end,

      });

      return exits.success(kumojinEventCreated);

    } catch (error) {

      throw error  ?? 'badRequest';

    }

  }

};
