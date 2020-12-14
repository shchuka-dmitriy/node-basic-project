import express                from 'express';
import * as ErrorHandlers     from './../middlewares/errorHandler/index.js';
import productRouter        from './product';
const router = express.Router();

router.use( productRouter );
router.use( ErrorHandlers.handleApplicationError );

export default router;