import { JSONSchema, Model, RelationMappings } from 'objection';
// import path from 'path';
import Utilities from '../../utils/Utilities';
import Tenant from './Tenant';


export default class User extends Model {

	id!: string;
	first_name!: string;
	last_name!: string;
	email!: string;
	phone!: string;
	created_at!: string;
	updated_at!: string;

	tenant?: Tenant;

	static tableName = 'User';

	static jsonSchema: JSONSchema = {
		type: 'object',
		required: ['first_name', 'last_name', 'email', 'phone'],
		properties: {
			id: { type: 'string' },
			first_name: { type: 'string' },
			last_name: { type: 'string' },
			email: { type: 'string' },
			phone: { type: 'string' }
		},
	};

	static relationMappings: RelationMappings = {

		tenant: {
			relation: Model.BelongsToOneRelation,
			modelClass: Tenant,
			// modelClass: path.join(__dirname, 'Tenant'),
			join: {
				from: 'User.tenant_id',
				to: 'Tenant.id'
			}
		}

	};

	$beforeInsert(): void {

		this.id = `user_${Utilities.getRandomId()}`;

	}

}