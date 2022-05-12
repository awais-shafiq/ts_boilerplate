import { Request, Response, NextFunction } from 'express';
import Exceptions from './Exceptions';
import Utilities from './Utilities';

const logRequests = (req: Request, res: Response, next: NextFunction): void => {

	// console.log(
	// 	'\x1b[34m', `ip : ${req.ip}`, '         ', `method : ${req.method}`, '         ', `endpoint : ${req.path}`
	// );

	console.log('\x1b[34m', { ip: req.ip, method: req.method, endpoint: req.path });

	next();

};

const parseUser = (req: Request, res: Response, next: NextFunction): void => {

	try {

		// const userJSON = req.headers['user'];

		// if (!userJSON || typeof userJSON !== 'string') {
		// 	throw new Error('Error while parsing user');
		// }

		// req['user'] = JSON.parse(userJSON);

		req['user'] = { id: Utilities.getRandomId(), tenant_id: Utilities.getRandomId(), email: 'abc@gmail.com', role_scopes: [] };

		next();

	} catch (err) {
		const exception = Exceptions.getError(err);
		res.status(exception.statusCode).json({ message: exception.message });
	}

};


export default { parseUser, logRequests };