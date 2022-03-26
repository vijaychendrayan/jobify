
import jwt from 'jsonwebtoken'
import { UnauthenticatedError } from "../errors/index.js"

UnauthenticatedError
const auth = async (req,res,next) => {
    
    const authHeader = req.headers.authorization
    //console.log('Authenticate User')
    //console.log(authHeader)
    if(!authHeader || !authHeader.startsWith('Bearer')){
       throw new UnauthenticatedError('Authentication Invalid') 
    }
    const token = authHeader.split(' ')[1]
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // console.log('Payload : ', payload);
        // req.user = payload
        req.user = {userId: payload.userID}
        //console.log("Auth (req.user", req.user)
        next()
    }catch(error){
        throw new UnauthenticatedError('Authentication Invalid') 
    }
    
}

export default auth