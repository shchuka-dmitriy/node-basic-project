'use strict';

export default (sequelize, DataTypes) => {
    const Attributes = sequelize.define( 'Attributes', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            weight: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            color: {
                type: DataTypes.STRING,
                allowNull: false
            },
            price: {
                type: DataTypes.FLOAT(10,2),
                // type: DataTypes.DECIMAL(10,2),
                allowNull: false
            },
            dualSim: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            videoCard: {
                type: DataTypes.STRING,
                allowNull: true,
            }
        },

        {
            timestamps: false,
            freezeTableName: true
        });

        Attributes.associate = function (models) {
            Attributes.hasOne(models.Product, { foreignKey: 'attributesId', targetKey: 'id' });
        };

    return Attributes;
}