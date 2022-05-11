// export enum StatusCode {

// 	SUCCESS = 200,
// 	CREATED = 201,
// 	INTERNAL_SERVER_ERROR = 500

// }

/**
 * Controller Response type declaration
 */
export type ResponseData = {
	isOK: boolean,
	statusCode: number,
	message?: string,
	data?: object
}

// export type Locals = ControllerResponse

// export type User = {

// 	id: number,
// 	first_name: string,
// 	last_name: string,
// 	email: string,
// 	phone: string,
// 	tenant: Tenant

// }

// export type Tenant = {
// 	id: number,
// 	name: string,
// 	domain: string
// 	users: User[]
// }

