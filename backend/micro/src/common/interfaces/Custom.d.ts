interface RoleScope {
	id: number;
	user_id: number;
	team_id: number;
}

interface AuthUser {
	id: number;
	tenant_id: number;
	email: string;
	role_scopes: RoleScope[];
}

declare namespace Express {
	export interface Request {
		user: AuthUser;
	}
}
declare namespace NodeJs {
	export interface ProcessEnv {
		PORT: number;
	}
}
