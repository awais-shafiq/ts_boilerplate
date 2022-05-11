import { Response } from 'express';
import { ResponseData } from '../models/Models';
import crypto from 'crypto';

export default {

	sendResponse: (res: Response, result: ResponseData): void => {

		if (!result.isOK) {
			res.status(result.statusCode).json({ message: result.message });
		} else {
			res.status(result.statusCode).json(result.data);
		}

	},

	getRandomId: (): string => {
		return `${Date.now().toString(36)}${crypto.randomBytes(48).toString('base64url').substring(0, 20)}`;
	}

};