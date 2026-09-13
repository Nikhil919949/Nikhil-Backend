import { Router } from "express";
import { loginUser,logoutUser,registerUser,refreshAccessToken } from "../controllers/user.controller.js";

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
router.rote("/logout").post(verifyJWT,logooutUser)
router.route("/refresh-token").post(refreshAccessToken)

export default router