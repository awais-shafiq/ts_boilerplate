interface RoleScope {
	id: number,
	user_id: number
	team_id: number,
}

interface AuthUser {
	id: string,
	tenant_id: string,
	email: string,
	role_scopes: RoleScope[]
}



declare namespace Express {
	export interface Request {
		user: AuthUser
	}
}

declare namespace NodeJS {
	export interface ProcessEnv {
		PORT?: number
		ACCESS_TOKEN_SECRET?: string
		PASSWORD_TOKEN_SECRET?: string
		POSTGRES_HOST?: string
		POSTGRES_PASSWORD?: string
		POSTGRES_USER?: string
		POSTGRES_DB?: string
	}
}
