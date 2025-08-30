import {Router} from "express"

import {create} from '../controllers/books/index.js'


const router = Router();
router.use("/create", create)

export default router;