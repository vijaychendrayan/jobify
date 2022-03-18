import { StatusCodes } from "http-status-codes"

const errorHandleMiddleware = (err,req,res,next) => {
    console.log(err);
    defaultError ={
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        msg: 'Something Went wrong',
    }
    if (err.name === 'ValidationError'){
        defaultError.statusCode = StatusCodes.BAD_REQUEST;
        defaultError.msg = Object.values(err.errors)
            .map((item)=> item.message)
            .join(',')
    }
    res.status(defaultError.statusCode).json({msg: defaultError.msg});
    
}

export default errorHandleMiddleware