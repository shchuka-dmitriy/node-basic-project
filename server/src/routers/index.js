import express                from 'express';
import * as ErrorHandlers     from './../middlewares/errorHandler/index.js';
import productRouter          from './product';
import userRouter             from './user';
const router = express.Router();

router.use('/api/v1/', productRouter, userRouter );
router.use( ErrorHandlers.handleApplicationError );

export default router;