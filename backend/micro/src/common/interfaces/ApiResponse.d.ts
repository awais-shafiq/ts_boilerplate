interface ApiResponse {
	status: number;
}

interface ApiSuccessReponse extends ApiResponse {
	data: Record<string, number | boolean | string, object>;
}

interface ApiErrorResponse extends ApiResponse {
	message: string;
}
