import { Error } from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';
import logger from './Logger';

const { DocumentNotFoundError } = Error;

export function GetError(error: Error): ApiErrorResponse {
	if (error instanceof DocumentNotFoundError) {
		return {
			status: StatusCodes.NOT_FOUND,
			message: 'Document not found',
		};
	}

	if (error instanceof ZodError) {
		// error;
		logger.error(error.format());
		logger.error(error.issues);
		// message = error.flatten;
	}

	return {
		status: StatusCodes.INTERNAL_SERVER_ERROR,
		message: 'Inernal server error',
	};
}
