import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {

	await knex.schema.createTable('Tenant', table => {
		table.string('id').primary().notNullable().defaultTo(knex.fn.now());
		table.timestamps(true, true, false);
	}).createTable('User', table => {
		table.string('id').primary().notNullable().defaultTo(knex.fn.now());
		table.string('first_name', 255).notNullable();
		table.string('last_name', 255).notNullable();
		table.string('email', 255).notNullable();
		table.string('phone', 255).notNullable();
		table.timestamps(true, true, false);
	});

}


export async function down(knex: Knex): Promise<void> {

	await knex.schema.dropTable('User');

}

