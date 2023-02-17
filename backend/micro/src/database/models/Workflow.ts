import mongoose from 'mongoose';

const WorkflowModelSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	tenant_id: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
	},
	rating: {
		type: Number,
	},
	author_id: {
		type: Number,
	},
	deleted: {
		type: Boolean,
		default: false,
	},
	icon_name: {
		type: String,
	},
	icon_image: {
		type: String,
	},
	color: {
		type: String,
		required: true,
	},
	version: {
		type: Number,
		required: true,
	},
	data: {
		type: Array,
		required: true,
		default: [],
	},
	created_at: {
		type: Date,
		required: true,
		default: Date.now,
	},
	updated_at: {
		type: Date,
		required: true,
		default: Date.now,
	},
}).set('toJSON', {
	virtuals: true,
	transform: (doc, ret) => {
		delete ret._id;
	},
});

// const Workflow = mongoose.model('workflow', WorkflowSchema);

// export interface IWorkflowModel extends z.infer<typeof WorkflowSchema>, Document {}

const Workflow = mongoose.model('workflow', WorkflowModelSchema);

export default Workflow;
