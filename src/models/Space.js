const { Model, DataTypes } = require('sequelize');

class Space extends Model {
    static init(sequelize) {
        super.init({
            
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.Vehicle, { foreignKey: 'user_id', as: 'vehicle' });
    }
}

module.exports = Space;
