import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {

	await knex.schema.createTable('Tenant', table => {
		table.string('id').primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
		table.timestamps(true, true, false);
	}).createTable('User', table => {
		table.string('id').primary().notNullable().defaultTo(knex.raw('gen_random_uuid()'));
		table.string('first_name', 255).notNullable();
		table.string('last_name', 255).notNullable();
		table.string('email', 255).notNullable();
		table.string('phone', 255).notNullable();
		table.string('tenant_id').references('id').inTable('Tenant').notNullable().onDelete('CASCADE').onUpdate('CASCADE');
		table.timestamps(true, true, false);
	});

}


export async function down(knex: Knex): Promise<void> {

	await knex.schema.dropTable('User');

}

