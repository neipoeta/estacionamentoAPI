const { Model, DataTypes } = require('sequelize');

class Vehicle extends Model {
    static init(sequelize) {
        super.init({
            brand: DataTypes.STRING,
            model: DataTypes.STRING(11),
            year: DataTypes.INTEGER,
            plate: DataTypes.STRING(6)
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}

module.exports = Vehicle;
