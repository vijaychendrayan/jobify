import mongoose from "mongoose"
import Job from "../model/Job.js"
import { StatusCodes } from "http-status-codes"
import { BadRequestError, NotFoundError, UnauthenticatedError } from "../errors/index.js"
import checkPermission from "../utils/checkPermissions.js"



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
    const {id:jobId} = req.params
    const {company, position} = req.body
    
    const job = await Job.findOne({_id: jobId})
    if(!job){
        throw new NotFoundError(`No Job with ID : ${jobId}`)
    }
    // Check Permission
    checkPermission(req.user, job.createdBy)
    await job.remove()

    res.status(StatusCodes.OK).json({msg:'Success! Job Removed'})
}


const getAllJob = async (req,res)=>{
    const jobs = await Job.find({ createdBy: req.user.userId})
    res
    .status(StatusCodes.OK)
    .json({jobs, totalJobs: jobs.length, numOfPages: 1})
}

const updateJob = async (req,res)=>{
    const {id:jobId} = req.params
    const {company, position} = req.body
    if (!position||!company){
        throw new BadRequestError('Please provide all values')
    }
    const job = await Job.findOne({_id: jobId})
    if(!job){
        throw new NotFoundError(`No Job with ID : ${jobId}`)
    }
    // Check Permission
    console.log(typeof req.user.userId)
    console.log(typeof job.createdBy)

    checkPermission(req.user, job.createdBy)

    const updatedJob = await Job.findOneAndUpdate({_id:jobId},req.body,{
        new: true,
        runValidators: true,

    })
    //Alternate Approach
    // job.position = position
    // job.company = company
    // await job.save()
    res.status(StatusCodes.OK).json({updatedJob})
}
const showStats = async (req,res)=>{
    let stats = await Job.aggregate([
        {$match:{createdBy: mongoose.Types.ObjectId(req.user.userId)}},
        {$group:{_id:'$status', count:{$sum:1}}}
    ])
    stats=stats.reduce((acc,curr)=>{
        const {_id:title,count}= curr
        acc[title] = count
        return acc
    },{})

    const defaultStats ={
        pending:stats.pending || 0,
        interview:stats.interview || 0,
        declined:stats.declined || 0

    }
    let monthlyApplications = []
    res.status(StatusCodes.OK).json({defaultStats,monthlyApplications})
}
export {createJob, deleteJob, getAllJob, updateJob, showStats}