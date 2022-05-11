import { ResponseData } from './../models/Models';
import Exceptions from '../utils/Exceptions';
import { StatusCode } from '../utils/Enum';
import User from '../database/db_models/User';

export default {

	create: async (params: object, query: object, authUser: AuthUser, data: object): Promise<ResponseData> => {

		try {

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

				}).withGraphFetched('tenant');

			console.log(user, user.tenant?.id);

			return { isOK: true, statusCode: StatusCode.CREATED, data: user };

		} catch (err) {

			return Exceptions.getError(err);

		}

	}

	// get: async (params: type) => {

	// }

};