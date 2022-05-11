import { Router } from 'express';
import Middleware from '../utils/Middleware';
import userRouter from './UserRoutes';

const router = Router();

router.use('/v1/users', Middleware.parseUser, userRouter);


export default router;

//Onboading document