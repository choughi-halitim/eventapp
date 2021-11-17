const { DataTypes } = require('sequelize');

module.exports = {

  attributes: {

    name:         { type: DataTypes.STRING(32), allowNull: false },

    description:  { type: DataTypes.STRING(1000), allowNull: false },

    start:        { type: DataTypes.DATE, allowNull: false },

    end:          { type: DataTypes.DATE, allowNull: false }

  },

  associations() {

  },
  defaultScope() {
    return { };
  },
  options: {

    hooks: {

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

        // eslint-disable-next-line no-undef
        return  SequelizeConnections['default'].transaction(async t => {

          options.transaction = t;

          return KumojinEvent.create(data, options);


        });

      }

    },

    instanceMethods: {

      async updateSafe(data, options) {

        const _self = this;

        options = options || {};

        // eslint-disable-next-line no-undef
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
