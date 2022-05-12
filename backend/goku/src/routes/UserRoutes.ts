import { Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';
import { ResponseData } from './../models/Models';
import Utilities from '../utils/Utilities';

const router: Router = Router();


router.post('/', async (req: Request, res: Response) => {

	

	const result: ResponseData = await UserController.create(req.params, req.query, req.user, req.body);

	Utilities.sendResponse(res, result);

});

router.get('/', async (req, res) => {

	const result: ResponseData = await UserController.list(req.params, req.query);

	Utilities.sendResponse(res, result);

});

router.get('/:id', async (req, res) => {

	const result: ResponseData = await UserController.list(req.params, req.query);

	Utilities.sendResponse(res, result);

});

export default router;