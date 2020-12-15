const db = require('../models');
const {ServerError, ResourceNotFoundError} = require('../utils/errors');

module.exports.getProductType = async (req, res, next) => {
    const productType = req.body.productType;
    const foundProductType = await db.ProductTypes.findOne( { where: {productType}} );
    if (!foundProductType) {
        throw new ResourceNotFoundError(productType);
    } else {
        req.productTypeId = foundProductType.id;
        next();
    }
}

module.exports.createAttributes = (req, res, next) => {
    db.Attributes.create(req.body.attributes).then(savedAttributes => {
        req.attributesId = savedAttributes.dataValues.id;
        next();
    }).catch(err => {
        next(new ServerError(err))
    });
}

module.exports.createProduct = (req, res, next) => {
    db.Products.create({
        productName: req.body.productName,
        attributesId: req.attributesId,
        productTypeId: req.productTypeId
    }).then(savedProduct => {
        if (savedProduct.dataValues !== []) {
            res.send('Product created!');
        }
    }).catch(err => {
        next(new ServerError(err));
    });
}

module.exports.updateProduct = (req, res, next) => {
    db.Products.update( req.body, { where: { id: req.params.id }
    }).then(updatedProduct => {
        if (updatedProduct) {
            res.send( updatedProduct )
        }
    }).catch(err => {
        next(new ServerError(err))
    })
}

module.exports.updateAttributes = (req, res, next) => {
    db.Attributes.update( req.body.attributes, { where: { id: req.attributesId }
    }).then(updatedAttributes => {
        if (updatedAttributes) {
            next();
        }
    }).catch(err => {
        next(new ServerError(err))
    })
}

module.exports.getAttributesId = async (req, res, next) => {
    const foundProduct = await db.Products.findOne( {
        where: {
            id: req.params.id
        }} );
    if (!foundProduct) {
        throw new ResourceNotFoundError('Product not found!');
    } else {
        req.attributesId = foundProduct.attributesId;
        next();
    }
}

module.exports.getProductById = (req, res, next) => {
    db.Products.findOne( {
        where: {
            id: req.params.id
        }
    }).then(foundProduct => {
        if (foundProduct) {
            res.send(foundProduct);
        }
    }).catch(err => {
        next(new ResourceNotFoundError(err))
    })
}

module.exports.deleteProductById = (req, res, next) => {
    db.Products.destroy({
        where: {
            id: req.params.id
        }
    }).then(removedProduct => {
        if (removedProduct) {
            res.send('Product removed!');
        }
    }).catch(err => {
        next(new ResourceNotFoundError(err))
    })
};