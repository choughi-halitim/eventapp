/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {

  return db.createTable('kumojin-events', {

    'id': { type: 'int', primaryKey: true, autoIncrement: true },

    'name': { type: 'string', length: 32, allowNull: false },

    'description': { type: 'string', length: 1000, allowNull: false },

    'start':  { type: 'timestamp', timezone: true, allowNull: false },

    'end':  { type: 'timestamp', timezone: true, allowNull: false },

    'created_at': { type: 'timestamp', timezone: true, allowNull: false },

    'updated_at': { type: 'timestamp', timezone: true, allowNull: false },

    'deleted_at': { type: 'timestamp', timezone: true },

  });

};

exports.down = function(db) {
  return db.dropTable('kumojin-events');
};

exports._meta = {
  'version': 1
};
