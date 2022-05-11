import { JSONSchema, Model } from 'objection';
import Utilities from '../../utils/Utilities';

export default class Tenant extends Model {

	id!: string;

	static tableName = 'Tenant';

	static jsonSchema: JSONSchema = {
		type: 'object',
		properties: {
			id: {type: 'string'},
		}
	};

	$beforeInsert(): void {

		this.id = `ten_${Utilities.getRandomId()}`;

	}
	

}