import { CustomError } from '../models/CustomError';
import { ResponseData } from './../models/Models';

export default {

	getError: (err: Error | unknown): ResponseData => {

		if (err instanceof CustomError) {
			return {
				isOK: false,
				statusCode: 401,
				message: err.message
			};
		}

		return {
			isOK: false,
			statusCode: 404,
			message: err instanceof Error ? err.message : 'Unknow error'
		};
	}

};