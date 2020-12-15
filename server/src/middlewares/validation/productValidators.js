const schemas = require('../../utils/validation/product');
const { BadRequestError } = require("../../utils/errors");

module.exports.productCreationValidate = async (req, res, next) => {
    const { productName, productType, attributes } = req.body;
    const productValidationResult = await schemas.productSchema.isValid( {productName, productType} );
    const attributesValidationResult = await schemas.attributesSchema.isValid( attributes );
    if (productValidationResult && attributesValidationResult) {
        next();
    } else {
        next( new BadRequestError('Invalid data for create product') );
    }
};