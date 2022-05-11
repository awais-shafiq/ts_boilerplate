const knexConfig = {
	client: 'postgresql',
	connection: {
		host: process.env.POSTGRES_HOST,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		directory: './database/migrations'
	},
	seeds: {
		directory: './database/seeds'
	}
};

export default knexConfig;
