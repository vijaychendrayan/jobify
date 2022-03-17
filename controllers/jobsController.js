const createJob = async (req,res)=>{
    res.send('createJob ')
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