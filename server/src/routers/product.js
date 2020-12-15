import express from 'express';
const productController = require('../controllers/productController');
const productRouter = express.Router();
const validatorMiddleware = require('../middlewares/validation/productValidators');

productRouter.route( '/product' )
    .post(
        validatorMiddleware.productCreationValidate,
        productController.getProductType,
        productController.createAttributes,
        productController.createProduct );

productRouter.route( '/product/:id' )
    .get(
        // checkToken
        productController.getProductById
    )
    .patch(
        // checkToken
        productController.getAttributesId,
        productController.updateAttributes,
        productController.updateProduct )
    .delete(
        // checkToken
        productController.deleteProductById
    )

export default productRouter;