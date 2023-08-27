import express from "express";
import {getProfile, updatePofile, deletePofile, followUser} from '../controllers/profileController.js';

const profileRoutes = express.Router();
 
profileRoutes.get('/:id', getProfile);
profileRoutes.put('/:id', updatePofile);
profileRoutes.delete('/:id', deletePofile);
profileRoutes.put('/:id/follow', followUser);

export default profileRoutes;