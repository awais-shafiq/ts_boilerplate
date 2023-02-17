import mongoose from 'mongoose';
import logger from './../utils/Logger';
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_LEVVY_DB = process.env.MONGO_LEVVY_DB;

// const logger = require('../utilities/Logger');
const connectMongo = (): void => {
	const dbURI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/workflowtest${MONGO_LEVVY_DB}?retryWrites=true&w=majority`;
	mongoose.set('strictQuery', true);
	mongoose.connect(dbURI, (error) => {
		if (error) {
			logger.error(`MongoDB connection error ${error}`);
			process.exit(1);
		}
	});
};

const disconnectMongo = async (): Promise<void> => {
	try {
		await mongoose.disconnect();
		logger.info('MongoDB Connection closed!');
	} catch (error) {
		logger.error(error);
	}
};
export default { connectMongo, disconnectMongo };
