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
            return response.json({
                mensagem: 'Dados inválidos'
            }).status(400)
        }
        
        const vehicle = await Vehicle.create({  brand, model, year, plate, user_id });
    
        return res.json(vehicle);
        }
};

