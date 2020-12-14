'use strict';

export default (sequelize, DataTypes) => {
    const Product = sequelize.define( 'Products', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            productName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            productTypeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'ProductType',
                    key: 'id'
                }
            },
            attributesId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Attributes',
                    key: 'id'
                }
            }

        },

        {
            timestamps: false,
        });

        Product.associate = function (models) {
            Product.belongsTo(models.ProductType, {
                foreignKey: 'productTypeId',
                sourceKey: 'id'
            });
        };

        Product.associate = function (models) {
            Product.belongsTo(models.Attribures, {
                foreignKey: 'attributesId',
                sourceKey: 'id'
            });
        };

    return Product;
}