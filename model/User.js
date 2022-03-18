import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({userID: this._id}, 'jwtSecret', { expiresIn: '1d'});
}

export default mongoose.model('User', UserSchema)