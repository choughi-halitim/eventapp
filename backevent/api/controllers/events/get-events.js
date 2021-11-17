module.exports = {


  friendlyName: 'GET EVENTS',


  description: 'Get all events',


  extendedDescription:  'Get all events',

  inputs: { },

  exits: { success: {  statusCode: 200 } },

  fn: async function ({}, exits) {

    const events = await KumojinEvent.findAndCountAll();

    return exits.success(events);

  }

};
