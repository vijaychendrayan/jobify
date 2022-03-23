import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required: [true, 'Please Provide company'],
        maxlength:50
    },
    position:{
        type:String,
        required: [true, 'Please Provide position'],
        maxlength:100
    },
    status:{
        type:String,
        enum: ['interview','declined','pending'],
        default:'pending'
       
    },
    jobType:{
        type:String,
        enum: ['full-time','part-time','remote','internship'],
        default: 'full-time',
    },
    jobLocation:{
        type:String,
        default: 'my city',
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide the user']
    },
},
    {timestamps: true}
)

export default mongoose.model('Job', JobSchema)