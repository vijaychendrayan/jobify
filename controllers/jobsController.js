import Job from "../model/Job.js"
import { StatusCodes } from "http-status-codes"
import { BadRequestError, NotFoundError } from "../errors/index.js"


const createJob = async (req,res)=>{
    const {position, company } = req.body

    if(!position || !company){
        throw new BadRequestError('Please provide all values')
    }
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const deleteJob = async (req,res)=>{
    res.send('deleteJob')
}
const getAllJob = async (req,res)=>{
    res.send('getAllJob')
}

const updateJob = async (req,res)=>{
    res.send('updateJob')
}
const showStats = async (req,res)=>{
    res.send('showStats')
}
export {createJob, deleteJob, getAllJob, updateJob, showStats}