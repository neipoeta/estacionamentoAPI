import dbConfig from '../config/database';
import User from '../models/User';
import Vehicle from '../models/Vehicle';
import Space from '../models/Space';

const Sequelize = require('sequelize');
const connection = new Sequelize(dbConfig);

User.init(connection);
Vehicle.init(connection);
Space.init(connection);

User.associate(connection.models);
Vehicle.associate(connection.models);
Space.associate(connection.models);

module.exports = connection;

