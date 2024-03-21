const asyncHandler = (requestHandleer) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandleer(req,res,next)).catch(err =>next(err)); 
    }
}

export default asyncHandler;

// const asyncHandler = (fn) =>async (req,res,next) =>{
//     try{
//         await fn(req,res,next);

//     }catch(err){
//         res.status(err.code|| 500).json({
//             success: false,
//             message: err.message,
//             error: err
//         });
//     }
// }