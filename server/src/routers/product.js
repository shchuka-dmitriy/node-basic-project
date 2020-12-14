import express            from 'express';
const productCreateController = require('../controllers/productCreateController');
const productRouter = express.Router();

productRouter.route( '/product' )
    .post(
        productCreateController.createProduct );

export default productRouter;