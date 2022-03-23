import { FormRow, Alert, FormRowSelect } from "../../components"
import { useAppContext } from "../../context/appContext"
import Wrapper from "../../assets/wrappers/DashboardFormPage"

const AddJob = () => {
    const{
        isLoading, isEditing, showAlert, displayAlert, position, company,
        jobLocation, jobType, jobTypeOptions, status,statusOptions,
        handleChange, clearValues, createJob
    } = useAppContext()

    // console.log('Status Options : ', statusOptions)
    // console.log('Job Type Options : ', jobTypeOptions)

    const handleJobInput = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        // console.log(`${name}: ${value}`)

        handleChange({name: e.target.name, value: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!position || !company || !jobLocation){
            displayAlert()
            return
        }
        if(isEditing){
            // eventually editJob()
            return

        }
        createJob()
        console.log('Create/edit JOB')

    }

    return <Wrapper>
        <form className="form">
            <h3>{isEditing? 'edit job': 'add job'}</h3>
            {showAlert && <Alert />}
            <div className="form-center">
                {/* Position */}
                <FormRow type="text" name="position" value={position} handleChange={handleJobInput}></FormRow>
                {/* company */}
                <FormRow type="text" name="company" value={company} handleChange={handleJobInput}></FormRow>
                {/* jobLocation */}
                <FormRow type="text" labelText="job location" name="jobLocation" value={jobLocation} handleChange={handleJobInput}></FormRow>
                {/* job status */}
                <FormRowSelect 
                    name='status' 
                    value={status} 
                    handleChange={handleJobInput} 
                    list = {statusOptions}
                />
                {/* job type */}
                <FormRowSelect 
                    name= 'jobType' 
                    labelText='job type' 
                    value={jobType} 
                    handleChange={handleJobInput} 
                    list= {jobTypeOptions}
                />
                {/* Submit */}
                <div className="btn-container">
                <button type='submit' className="btn btn-block submit-btn" onClick={handleSubmit} disabled={isLoading}>
                    Submit
                </button>
                <button className="btn btn-block clear-btn" 
                onClick={(e) =>{
                    e.preventDefault()
                    clearValues()}
                    }>
                    Clear
                </button>
            </div>
            </div>
            
        </form>

    </Wrapper>

}

export default AddJob