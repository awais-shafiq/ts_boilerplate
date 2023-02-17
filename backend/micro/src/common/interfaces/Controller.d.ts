interface IReadableController<T, Q> {
	list(req: T, res: Q): Promise<void>;
	get(req: T, res: Q): Promise<void>;
}

interface IWritableController<T, Q> {
	create(req: T, res: Q): Promise<void>;
	update(req: T, res: Q): Promise<void>;
	delete(req: T, res: Q): Promise<void>;
}
