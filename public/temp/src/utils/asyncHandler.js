 const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(req,res,next).
        catch((err)=>next(err))
    }
 }


////This is basically used to the try and catch method
// export {asyncHandler}
// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{
//     await(req,res,next)
//     }catch(error){
//         res.error(err.code || 500).json({
//             success: false,
//             message: err.message

//         })
//     }
// }
