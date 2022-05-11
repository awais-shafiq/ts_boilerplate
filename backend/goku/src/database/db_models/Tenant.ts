import { Model } from 'objection';
// import path from 'path';

export default class Tenant extends Model {

	id!: number;

	static tableName = 'tenant';

}