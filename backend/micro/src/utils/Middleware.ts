import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

// const cors = (req: Request, res: Response, next: NextFunction): void => {

// 	res.setHeader('')

// };

const parseUser = (req: Request, res: Response, next: NextFunction): void => {
	try {
		const user = req.headers['user'] as string;
		req.user = JSON.parse(user);
		next();
	} catch (error) {
		res.sendStatus(StatusCodes.FORBIDDEN);
	}
};

export default { parseUser };
