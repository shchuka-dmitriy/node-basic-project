'use strict';

const {PHONE, TABLET, NOTEBOOK} = require('../constants/constants');

export default (sequelize, DataTypes) => {
    const ProductType = sequelize.define( 'ProductTypes', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            productType: {
                type: DataTypes.ENUM(PHONE, TABLET, NOTEBOOK),
                allowNull: false
            },
        },

        {
            timestamps: false,
        });

        ProductType.associate = function (models) {
            ProductType.hasOne(models.Products, { foreignKey: 'productTypeId', targetKey: 'id' });
        };

    return ProductType;
}