import express from "express";
import {getProfile, updatePofile} from '../controllers/profileController.js';

const profileRoutes = express.Router();
 
profileRoutes.get('/:id', getProfile);
profileRoutes.put('/:id', updatePofile);

export default profileRoutes;