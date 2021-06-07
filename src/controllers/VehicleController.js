const User = require('../models/User');
const Vehicle = require('../models/Vehicle');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'vehicles' }
        });
        return res.json(user);
    },

    async store(req, res) {
        const { user_id } = req.params;
        const { brand, model, year, plate} = req.body;

        const user = await User.findByPk(user_id);

        if (!user_id) {
            return res.status(400).json({ error: 'user not found' });
        }
    
        if (!brand || !model || !year || !plate) {
            return res.json({
                mensagem: 'Dados inválidos'
            }).status(400)
        }
        
        const vehicle = await Vehicle.create({  brand, model, year, plate, user_id });
    
        return res.json(vehicle);
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

