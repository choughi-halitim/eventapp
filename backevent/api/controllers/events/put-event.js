module.exports = {


  friendlyName: 'Init visitor',


  description: 'Search',


  extendedDescription:
`This action deletes the \`req.session.userId\` key from the session of the requesting user agent.
Actual garbage collection of session data depends on this app's session store, and
potentially also on the [TTL configuration](https://sailsjs.com/docs/reference/configuration/sails-config-session)
you provided for it.

Note that this action does not check to see whether or not the requesting user was
actually logged in.  (If they weren't, then this action is just a no-op.)`,


  fn: async function () {
    console.log(this.req);
    console.log(this.res);
    try{
      let visitor = await Visitor.findOne({
        id: this.req.body.id || this.req.session.id
      });

      if (visitor) {
        visitor.changed('updatedAt', true);
        await visitor.updateSafe({
          updatedAt: new Date()
        }, { });
      } else {
        visitor = await Visitor.createSafe({
          id: this.req.session.id
        }, { });
      }
      return visitor;
    } catch (e) {
      console.log(e);
      console.log(e);
      console.log(e);
      console.log(e);
      console.log(e);
    }

  }
};
