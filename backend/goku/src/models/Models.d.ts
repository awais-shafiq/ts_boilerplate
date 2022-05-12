import { OrderByDirection } from 'objection';

/**
 * Controller Response type declaration
 */
export type ResponseData = {
	isOK: boolean,
	statusCode: number,
	message?: string,
	data?: object
}


export type PathParams = {
	id?: string
}

export type QueryParams = {
	limit?: number,
	offset?: number,
	order_by?: string,
	sort?: OrderByDirection,
	expand?: string,
}

