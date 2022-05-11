import express, { Application } from 'express';
import Database from './database/Database';
import router from './routes';
import Middleware from './utils/Middleware';

const app: Application = express();

Database.initDBConnection();

app.use(Middleware.logRequests);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
	console.log('Server Started!');
});
