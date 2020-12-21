const schemas = require('../../utils/validation/product');
const { BadRequestError } = require("../../utils/errors");

module.exports.productCreationValidate = async (req, res, next) => {
    const { productName, productType, weight, color, price } = req.body;
    const productValidationResult = await schemas.productSchema.isValid( {productName, productType, weight, color, price} );
    if (productValidationResult) {
        next();
    } else {
        next( new BadRequestError('Invalid data for create product') );
    }
};