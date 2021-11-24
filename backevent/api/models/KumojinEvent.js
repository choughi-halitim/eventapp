const { DataTypes } = require('sequelize');
const moment = require('moment');

module.exports = {

  attributes: {

    name:         { type: DataTypes.STRING(32), allowNull: false },

    description:  { type: DataTypes.STRING(1000), allowNull: false },

    start:        { type: DataTypes.DATE, allowNull: false },

    end:          { type: DataTypes.DATE, allowNull: false }

  },

  associations() { },

  defaultScope() { return { }; },

  options: {

    hooks: {

      async beforeValidate(instance) {

          const start = moment(instance.start);

          const end = moment(instance.end);

          if (start.isAfter(end)) {

            throw 'startAfterEndError'

          }

      },

      async beforeCreate (instance, options) {

        if (!options.transaction) {

          throw new Error('KumojinEvent must be updarted into transaction');

        }

      },

      async beforeUpdate (instance, options) {

        if (!options.transaction) {

          throw new Error('KumojinEvent must be created into transaction');

        }

      },

    },

    classMethods: {

      async createSafe(data, options) {

        options = options || {};

        return  SequelizeConnections['default'].transaction(async t => {

          options.transaction = t;

          return KumojinEvent.create(data, options);


        });

      },

      async bulkCreateSafe(data, options) {

        options = options || {};

        return  SequelizeConnections['default'].transaction(async t => {

          options.transaction = t;

          return KumojinEvent.bulkCreate(data, options);


        });

      }

    },

    instanceMethods: {

      async updateSafe(data, options) {

        const _self = this;

        options = options || {};

        return  SequelizeConnections['default'].transaction(async t => {

          options.transaction = t;

          return _self.update(data, options);

        });

      },

    },

    scopes: { },

    tableName: 'kumojin-events',

    underscored: true,

    paranoid: true

  },

};
