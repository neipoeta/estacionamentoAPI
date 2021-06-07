const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users)
    },

    async store(req, res) {
        const {
            name,
            cpf,
            apartment,
            phone,
            age
        } = req.body;

        if (!name || !phone || !cpf || !apartment || !age) {
            return response.json({
                mensagem: 'Dados inválidos'
            }).status(400)
        }

        const user = await User.create({
            name,
            cpf,
            apartment,
            phone,
            age
        });

        return res.json(user);
    },

    async delete(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!id) {
            return res.status(400).json({
                error: 'user not found'
            });
        }

        await user.removeUser(user);

        return res.json();
    }
};