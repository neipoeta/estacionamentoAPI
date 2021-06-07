const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            cpf: DataTypes.STRING(11),
            apartment: DataTypes.INTEGER,
            phone: DataTypes.STRING(11),
            age: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Vehicle, { foreignKey: 'user_id', as: 'vehicles' });
        this.hasMany(models.Space, { foreignKey: 'user_id', as: 'spaces' });
    }
}

module.exports = User;
