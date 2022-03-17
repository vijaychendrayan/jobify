import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    name: {type: String, required:[true, 'Pleae provide name'], minlength:3, maxlength:20, trim: true},
    email: {
        type: String, 
        required:[true, 'Pleae provide email'],
        validate:{
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true
    },
    password: {type: String, required:[true, 'Pleae provide password'], minlength:3},
    lastName: {type: String, minlength:3, maxlength:20, trim: true},
    location: {type: String, required:[true, 'Pleae provide name'], maxlength:20, trim: true, default: 'my city'},

})

export default mongoose.model('User', UserSchema)