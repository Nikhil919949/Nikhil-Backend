import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

import {upload} from "../middleware/multer.midlleware.js"


const router=Router()

router.route("/register").post(
    upload.fileds([
     {
        name: "avatar",
        maxCount:1
     },
     {
        name: "coverImage",
        maxCount:1 
     }
    ]),
    registerUser
)

router.route("/login").post(loginUser)

//secured routes


export default router