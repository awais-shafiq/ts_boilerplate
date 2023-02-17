import { Router } from 'express';
import Middleware from '../../utils/Middleware';

import workflowRouter from './WorkflowRoutes';

const router = Router();

router.use('/v2/workflows', Middleware.parseUser, workflowRouter);

export default router;
