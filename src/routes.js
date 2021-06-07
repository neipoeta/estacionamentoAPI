const express = require('express'); 
const UserController = require("./controllers/UserController");
const VehicleController = require("./controllers/VehicleController");

export const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.delete); 

routes.get('/users/:user_id/vehicles', VehicleController.index);
routes.post('/users/:user_id/vehicles', VehicleController.store);
routes.delete('/users/:user_id/vehicles', VehicleController.delete);

routes.get('/users/:user_id/spaces', VehicleController.index);
routes.post('/users/:user_id/:vehicle_id/spaces', VehicleController.store);

