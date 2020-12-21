import express from 'express';
import hashPassword from '../middlewares/hashPassword';
const userController = require('../controllers/userController');
const userRouter = express.Router();
const validatorMiddleware = require('../middlewares/validation/userValidators');
const checkToken = require('../middlewares/checkToken');

userRouter.route('/registration')
    .post(
        validatorMiddleware.registrationValidate,
        hashPassword,
        userController.registration,
        userController.createAccessToken );

userRouter.route('/login')
    .post(
        validatorMiddleware.loginValidate,
        userController.authorization,
        userController.createAccessToken );

userRouter.route( '/user(/:id)?' )
    .get(
        checkToken.checkToken,
        userController.getUserById )

export default userRouter;