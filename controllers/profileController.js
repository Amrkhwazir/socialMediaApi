import bcrypt from "bcrypt";
import User  from "../models/User.js";

export const getProfile = (req, res) => {
    console.log(req.params);
    res.status(200).send({
        status: "success",
        data: [],
        message: "ye rha logged in user ka data"
    })
};

export const updatePofile = async (req, res) => {
    console.log(req.params.id)
    try {
        if(req.body.userId === req.params.id){
            try {
                const user = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                 });
                 res.status(200).json("Account has been updated")
            } catch (error) {
                res.status(500).json(error)
            }
        }else{
            return res.status(403).json("Ap Account update ni kr skty")
        }
    } catch (error) {
        res.status(500).json(error)
    }
   };