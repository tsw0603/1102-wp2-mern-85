import express from "express";
const router = express.Router();

import {
    register_85,
    login_85,
    updateUser_85,
} from '../controllers/authController_85.js';

router.route('/register_85').post(register_85);
router.route('/login_85').post(login_85);
router.route('/updateUser_85').patch(updateUser_85);

export default router;