import User from '../models/User';

export = {
    async index(req, res) {
        const users = await User.findAll();

        const { apartment, phone } = req.query;
        const result = users.filter((user: any )=> {
            return apartment ? user.apartment == apartment : true || phone ? user.phone == phone : true;
        })
        return res.json(result)
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
            return res.json({
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

        await User.drop(this.user);

        return res.json();
    }
};