import { Request, Response } from 'express';
import { WorkflowParams, CreateWorkflow } from '../../common/schemas/WorkflowSchema';
import { WorkflowService } from '../services/WorkflowService';
import * as Utils from './../../utils';

class WorkflowController implements IReadableController<Request, Response>, IWritableController<Request, Response> {
	async list(req: Request, res: Response): Promise<void> {
		try {
			const data = await WorkflowService.getWorkflows(req.user.tenant_id);
			Utils.sendSuccessResponse(req, res, 200, data);
		} catch (error) {
			Utils.sendErrorResponse(req, res, error as Error);
		}
	}

	async get(req: Request, res: Response): Promise<void> {
		try {
			// const data = WorkflowSchema.parse(req.body);
			const params = WorkflowParams.parse(req.params);
			const data = await WorkflowService.getWorkflowById(params.id, req.user.tenant_id);

			Utils.sendSuccessResponse(req, res, 200, data);
		} catch (error) {
			Utils.sendErrorResponse(req, res, error as Error);
		}
	}

	async create(req: Request, res: Response): Promise<void> {
		try {
			const reqBody = CreateWorkflow.parse(req.body);
			const data = await WorkflowService.createWorkflow({ ...reqBody, tenant_id: req.user.tenant_id });

			Utils.sendSuccessResponse(req, res, 200, data);
		} catch (error) {
			Utils.sendErrorResponse(req, res, error as Error);
		}
	}

	async update(req: Request, res: Response): Promise<void> {
		try {
			const data = CreateWorkflow.parse(req.body);
			Utils.sendSuccessResponse(req, res, 200, data);
		} catch (error) {
			Utils.sendErrorResponse(req, res, error as Error);
		}
	}

	async delete(req: Request, res: Response): Promise<void> {
		try {
			const data = CreateWorkflow.parse(req.body);
			Utils.sendSuccessResponse(req, res, 200, data);
		} catch (error) {
			Utils.sendErrorResponse(req, res, error as Error);
		}
	}
}

export default WorkflowController;
