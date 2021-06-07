const express = require('express'); 
const UserController = require("./controllers/UserController");
const VehicleController = require("./controllers/VehicleController");

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/vehicles', VehicleController.index);
routes.post('/users/:user_id/vehicles', VehicleController.store);

module.exports = routes;
