import express, { Router } from 'express';
import { getTopics } from '../controller/topic';

const router: Router = express.Router();

router.route('/').get(getTopics);

export default router;
