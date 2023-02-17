import Workflow from '../../database/models/Workflow';
import { TWorkflow } from '../../common/schemas/WorkflowSchema';

export class WorkflowService {
	/**
	 * > Get all workflows for a given tenant
	 * @param {number} tenant_id - number - The tenant id of the workflow
	 * @returns An array of TWorkflow objects
	 */
	static async getWorkflows(tenant_id: number): Promise<Array<TWorkflow>> {
		return await Workflow.find({ tenant_id: tenant_id });
	}

	/**
	 * "Get a workflow by id, or fail."
	 *
	 * The `orFail()` method is a shorthand for `.catch(() => { throw new Error('Not found'); })`
	 * @param {number} id - number - The id of the workflow you want to get
	 * @param {number} tenant_id - The tenant id of the workflow.
	 * @returns A promise of a single workflow
	 */
	static async getWorkflowById(id: string, tenant_id: number): Promise<TWorkflow> {
		return await Workflow.findOne({
			id: id,
			tenant_id: tenant_id,
		}).orFail();
	}

	/**
	 * > Create a new workflow
	 * @param {TWorkflow} workflow - TWorkflow - This is the workflow object that we are going to create.
	 * @returns The workflow that was created.
	 */
	static async createWorkflow(workflow: TWorkflow): Promise<TWorkflow> {
		return await Workflow.create(workflow);
	}

	/**
	 * It finds a workflow by id and tenant_id, updates it with the new workflow object, and returns the
	 * updated workflow
	 * @param {number} id - The id of the workflow to update
	 * @param {number} tenant_id - The tenant id of the workflow
	 * @param {TWorkflow} workflow - TWorkflow - This is the type of the workflow object that is passed
	 * in.
	 * @returns The updated workflow
	 */
	static async updateWorkflow(id: number, tenant_id: number, workflow: TWorkflow): Promise<TWorkflow> {
		return await Workflow.findOneAndUpdate({ id: id, tenant_id: tenant_id }, workflow).orFail();
	}

	/**
	 * "Find a workflow by id and tenant_id, and delete it. If it doesn't exist, throw an error."
	 *
	 * The `orFail()` method is a Mongoose method that throws an error if the document doesn't exist
	 * @param {number} id - The id of the workflow to delete
	 * @param {number} tenant_id - The tenant id of the workflow to be deleted.
	 * @returns The deleted workflow
	 */
	static async deleteWorkflow(id: number, tenant_id: number): Promise<TWorkflow> {
		return await Workflow.findOneAndDelete({
			id: id,
			tenant_id: tenant_id,
		}).orFail();
	}
}
