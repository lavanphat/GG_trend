import express, { Router } from 'express';
import { copyTag, getAllKeyword } from '../controller/keyword';

const router: Router = express.Router();

router.route('/').get(getAllKeyword);
router.route('/copy-tag').get(copyTag);

export default router;
