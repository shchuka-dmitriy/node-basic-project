// import { Attributes, Product, ProductType } from './../models';
const {ServerError, ResourceNotFoundError} = require("../utils/errors");

module.exports.createProduct = (req, res, next) => {
    const newAttributes = req.body.attributes;
    const productName = req.body.productName;
    const productType = req.body.productType;

    Attributes.create(newAttributes).then(savedAttributes => {
        req.attributes = savedAttributes.data;


        const productTypeId = ProductType.findOne({where: {productType}});
        if (productTypeId === null) {
            throw new ResourceNotFoundError(productType);
        } else {
            createProduct(productName, savedAttributes.dataValues.id, productTypeId.id, next)
        }


    }).catch(err => {
        next(new ServerError(err))
    });
}

const createProduct = (productName, attributesId, productTypeId, next) => {
    Product.create({
        productName: productName,
        attributesId: attributesId,
        productTypeId: productTypeId
    }).then(savedProduct => {
        if (savedProduct.dataValues !== []) {
            next();
        }
    }).catch(err => {
        next(new ServerError(err))
    });
}
