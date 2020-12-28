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

module.exports.getProductById = (req, res, next) => {
    db.Products.findOne( {
        where: {
            id: req.params.id,
        },
        attributes: { exclude: ['productTypeId', 'attributesId'] },
        include: [
            {
                model: db.Attributes,
                required: true,
                attributes: { exclude: ['id'] }
            }
        ],
    }).then(foundProduct => {
        if (foundProduct) {
            res.send(foundProduct);
        }
    }).catch(err => {
        next(new ResourceNotFoundError(err))
    })
}

module.exports.deleteProductById = (req, res, next) => {
    const deletedProductId = req.params.id;
    db.Products.destroy({
        where: {
            id: deletedProductId
        }
    }).then(removedProduct => {
        if (removedProduct) {
            res.send(`Product with id: ${deletedProductId} removed!`);
        }
    }).catch(err => {
        next(new ResourceNotFoundError(err))
    })
};

module.exports.getProducts = (req, res, next) => {
    const { body: {limit, offset} } = req;
    db.Products.findAll({
        limit,
        offset: offset ? offset : 0,
        order: [['productName', 'ASC']],
        attributes: { exclude: ['productTypeId', 'attributesId'] },
        include: [
            {
                model: db.Attributes,
                required: true,
                attributes: { exclude: ['id'] }
            }
        ],
    }).then(products =>
    {
        let haveMore = true;
        if (products.length < 8) {
            haveMore = false;
        }
        res.send( {products, haveMore} );
    }).catch(err => {
        next(new ResourceNotFoundError(err))
    })
};