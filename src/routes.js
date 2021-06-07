const express = require('express'); 
const UserController = require("./controllers/UserController");
const VehicleController = require("./controllers/VehicleController");
const SpaceController = require("./controllers/SpaceController");

export const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users/:id', UserController.delete); 

routes.get('/users/:user_id/vehicles', VehicleController.index);
routes.post('/users/:user_id/vehicles', VehicleController.store);
routes.delete('/users/:user_id/vehicles', VehicleController.delete);

routes.get('/users/:user_id/spaces', SpaceController.index);
routes.post('/users/:user_id/vehicles/:vehicle_id/spaces', SpaceController.store);

