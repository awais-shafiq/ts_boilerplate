
import knex from 'knex';
import { Model } from 'objection';
import knexConfig from '../knexfile';
// import config from './../knexfile';

const _knex = knex(knexConfig);

export default {

	initDBConnection: (): void => {
		Model.knex(_knex);
	},

	closeDBConnection: async (): Promise<void> => {
		await _knex.destroy();
	}

};