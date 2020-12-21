const db = require('../models');
const {ServerError, ResourceNotFoundError} = require('../utils/errors');

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

module.exports.createAttributes = (req, res, next) => {
    db.Attributes.create({
        weight: req.body.weight,
        color: req.body.color,
        price: req.body.price,
        dualSim: req.body.dualSim || null,
        videoCard: req.body.videoCard || null
    }).then(savedAttributes => {
        req.attributesId = savedAttributes.dataValues.id;
        next();
    }).catch(err => {
        next(new ServerError(err))
    });
}

module.exports.updateAttributes = (req, res, next) => {
    db.Attributes.update({
        weight: req.body.weight,
        color: req.body.color,
        price: req.body.price,
        dualSim: req.body.dualSim || null,
        videoCard: req.body.videoCard || null
    }, { where: { id: req.attributesId }
    }).then(updatedAttributes => {
        if (updatedAttributes) {
            next();
        }
    }).catch(err => {
        next(new ServerError(err))
    })
}