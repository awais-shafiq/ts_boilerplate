import { z } from 'zod';

/* Defining the schema for the params that are passed in the URL. */
export const WorkflowParams = z
	.object({
		id: z.string(),
	})
	.strict();

/* Defining the schema for the query params that are passed in the URL. */
export const WorkflowQuery = z.object({
	offset: z.number().min(0),
	limit: z.number(),
	expand: z.enum(['client_workflows']),
});

/* Defining the schema for the data that is passed in the body of the request. */
export const CreateWorkflow = z
	.object({
		name: z.string(),
		tenant_id: z.number(),
		description: z.string().optional(),
		rating: z.number().optional(),
		author_id: z.number().optional(),
		deleted: z.boolean(),
		icon_name: z.string().optional(),
		icon_image: z.string().optional(),
		color: z.string(),
		version: z.number(),
		data: z
			.array(
				z.object({
					componentName: z.string(),
					displayName: z.string(),
					props: z.object({
						sections: z.array(
							z.object({
								sectionName: z.string(),
								componentName: z.string(),
								componentType: z.string(),
								columns: z.array(z.any()),
							}),
						),
					}),
				}),
			)
			.optional(),
		created_at: z.date().optional(),
		updated_at: z.date().optional(),
	})
	.strict();

export type TWorkflow = z.infer<typeof CreateWorkflow>;
