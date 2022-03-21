
import jwt from 'jsonwebtoken'
import { UnauthenticatedError } from "../errors/index.js"

const auth = async (req,rep,next) => {
    
    const authHeader = req.headers.authorization
    console.log('Authenticate User')
    console.log(authHeader)
    if(!authHeader || !authHeader.startsWith('Bearer')){
       throw new UnauthenticatedError('Authentication Invalied') 
    }
    const token = authHeader.split(' ')[1]
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        console.log('Payload : ', payload);
        req.user = payload
        next()
    }catch(error){
        throw new UnauthenticatedError('Authentication Invalied') 
    }
    next()
}

export default auth