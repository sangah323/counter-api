const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config.js');
const db = config.db[config.env];
const sequelize = new Sequelize(db.database, db.username, db.password, db);

const Counter = require('./counter.model.js')(sequelize, DataTypes);

module.exports = {
    Counter,
    sequelize
}