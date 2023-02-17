import { Router } from 'express';
import WorkflowController from '../controllers/WorkflowController';

const router = Router();

const workflowController = new WorkflowController();

router.get('/', workflowController.list);
router.post('/', workflowController.create);

export default router;
