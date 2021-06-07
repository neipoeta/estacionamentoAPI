const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Vehicle = require('../models/Vehicle');

const connection = new Sequelize(dbConfig);

User.init(connection);
Vehicle.init(connection);

User.associate(connection.models);
Vehicle.associate(connection.models);

module.exports = connection;

