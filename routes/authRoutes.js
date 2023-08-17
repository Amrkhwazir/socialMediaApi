import express from "express";
import {login, register} from '../controllers/authController.js';

const authRoutes = express.Router();
 
authRoutes.post('/rigester', register);
authRoutes.post('/login', login);

export default authRoutes;