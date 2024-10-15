import express from 'express'
import { deleteItem, getItem, postData, updateItem } from '../controllers/itemController.mjs';

let router = express.Router();


router.get('/',getItem);
router.post('/',postData);
router.put('/:id',updateItem);
router.delete('/:id',deleteItem);

export default router;