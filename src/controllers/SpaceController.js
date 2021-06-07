const User = require('../models/User');
const Vehicle = require('../models/Vehicle');
const Space = require('../models/Spaces');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'spaces' }
        });
        return res.json(user);
    },

    async store(req, res) {
        const { user_id, vehicle_id } = req.params;

        const vehicle = await Vehicle.findByPk(vehicle_id);

        if (!user_id) {
            return res.status(400).json({ error: 'user not found' });
        }

        if (!vehicle_id) {
            return res.json({
                mensagem: 'Dados inválidos'
            }).status(400)
        }
    
        const space = await Space.create({  vehicle_id });

        return res.json(space);
        },

        async delete(req, res) {
            const { user_id } = req.params;
            const { id } = req.body;
    
            const user = await User.findByPk(user_id);
    
            if (!user) {
                return res.status(400).json({
                    error: 'user not found'
                });
            }

            const vehicle = awaitVehicle.findOne({
                where: { id }
            });
    
            await vehicle.removeVehicle(vehicle);
    
            return res.json();
        }
};

