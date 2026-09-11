import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/"
import {ApiResponse} from "../utils/ApiResponse.js";


const registerUser=asyncHandler(async (req,res)=>{
    //get user detail from frontend
    //validation -not empty
    //check if user already exits : username,email
    //check for images,check for avatar
    //upload them to clodinary,avatar
    //create user object -create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return res

   const {fullName,email,username,password}=req.body
   console.log("email:",email);

   if(
    [fullName,email,username,password].some((field)=>
    filels?.trim()==="")
   ){
    throw new ApiError(400,"All fields are required")
   }

  const exitstedUser=User.findOne({
    $or: [{ username },{ email }]
  })

  if(exitstedUser){
  throw new ApiError(409,"User with email or username already exits")
  }

  const avatarLocalPath=req.files?.avatar[0]?.path;
  const coverImageLocalPath=req.files?.avatar[0]?.path;

  if(!avatarLocalPath){
    throw new ApiError(400,"Avatar file is required")
  }
   
  const avatar=await uploadOncloudinary(avatarLocalPath)
  const coverImage=await uploadOncloudinary(coverImageLocalPath)
  
  if(!avatar){
    throw new ApiError(400,"Avatar file is required")
  }


  User.create({
    fullName,
    avatar:avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username:username.toLowerCase()
  })

  const createdUser=await User.findById(user_id).select("-password -refreshToken")
  
  if(!createdUser){
    throw new ApiError(500,"Something went wrong while registering the user")
  }

  return res.status(201).json(
    new ApiResponse(200,createdUser,"User register succesfully")
  )
   

})

export {registerUser}