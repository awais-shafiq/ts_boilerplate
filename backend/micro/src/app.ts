import express, { Application } from 'express';
import router from './api/routes';
import connection from './database/connection';
import logger from './utils/Logger';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(3061, async () => {
	logger.info('Server started!');
	connection.connectMongo();
});
