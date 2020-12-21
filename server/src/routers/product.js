import express from 'express';
const productController = require('../controllers/productController');
const attributesController = require('../controllers/attributesController');
const productRouter = express.Router();
const validatorMiddleware = require('../middlewares/validation/productValidators');

productRouter.route( '/products' )
    .post(productController.getProducts);

productRouter.route( '/product' )
    .post(
        validatorMiddleware.productCreationValidate,
        productController.getProductType,
        attributesController.createAttributes,
        productController.createProduct );

productRouter.route( '/product/:id' )
    .get(productController.getProductById)
    .patch(
        attributesController.getAttributesId,
        attributesController.updateAttributes,
        productController.updateProduct )
    .delete(
        productController.deleteProductById
    )

export default productRouter;