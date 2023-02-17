import { Request, Response } from 'express';
import { GetError } from './Exceptions';

export function sendSuccessResponse(req: Request, res: Response, status: number, data: unknown[] | unknown): void {
	res.status(status).json(data);
}
export function sendErrorResponse(req: Request, res: Response, error: Error): void {
	const responseError = GetError(error);
	res.status(responseError.status).json({ message: responseError.message });
}
