import { PathParams, QueryParams, ResponseData } from './../models/Models';
import Exceptions from '../utils/Exceptions';
import { DefaultQuery, StatusCode } from '../utils/Enum';
import User from '../database/db_models/User';
// import { OrderByDirection } from 'objection';

export default {

	create: async (params: PathParams, queryParam: QueryParams, authUser: AuthUser, data: object): Promise<ResponseData> => {

		try {

			params.id;

			console.log(authUser, data);

			const user = await User.query()
				.insertGraph({

					tenant: {
						// '#ref': 'tenant',
						// id: authUser.tenant_id
					},
					...data,
					// id: authUser.id,
					// tenant_id: authUser.tenant_id

				});

			// console.log(user, user.tenant?.id);

			return { isOK: true, statusCode: StatusCode.CREATED, data: user };

		} catch (err) {

			return Exceptions.getError(err);

		}

	},


	list: async (params: PathParams, queryParams: QueryParams): Promise<ResponseData> => {

		try {

			const query = User.query()
				.withGraphFetched(queryParams.expand || DefaultQuery.EXPAND)
				.offset(queryParams.offset || DefaultQuery.OFFSET)
				.limit(queryParams.limit || DefaultQuery.LIMIT)
				.orderBy(queryParams.order_by || DefaultQuery.ORDER_BY, queryParams.sort || DefaultQuery.SORT);

			const data = await query;

			return { isOK: true, statusCode: StatusCode.SUCCESS, data: data };

		} catch (err) {
			return Exceptions.getError(err);
		}
	},

	get: async (params: PathParams): Promise<ResponseData> => {

		try {

			const user = await User.query().where({ id: params.id }).withGraphFetched('tenant');

			return { isOK: true, statusCode: StatusCode.SUCCESS, data: user };

		} catch (err) {
			return Exceptions.getError(err);
		}
	}

};

export interface UserController {

	// [id: string]: () => void,
	create: (params: PathParams, query: QueryParams, authUser: AuthUser, data: object) => Promise<ResponseData>
	list: (params: PathParams, query: QueryParams, authUser: AuthUser) => Promise<ResponseData>

}