import { useState, useEffect } from "react"
import { Logo, FormRow, Alert } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"
import { useAppContext } from "../context/appContext"



const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
   
}

export const Register = () => {
    const [values, setValues] = useState(initialState);

    const { isLoading, showAlert, displayAlert, registerUser } = useAppContext();
    console.log(showAlert);

    const toggleMember = () => {
        setValues({...values, isMember:!values.isMember});
    }

    const handleChange = (e) =>{
        setValues({...values,[e.target.name]: e.target.value})
        // console.log(values);
        // console.log(e.target);
    }


    const onSubmit = (e)=> {
        e.preventDefault();
        const {name, email, password, isMember} = values;
        if(!email || !password || (!isMember && !name)){
            displayAlert();
            return
        }
        const currentUser = {name, email, password}
        if(isMember){
            console.log('Already Member')
        }else{
            registerUser(currentUser)
        }

        // console.log(values,e.target);
    }

    return (
      <Wrapper className="full-page">
          <form className="form" onSubmit={onSubmit}>
              <Logo />
              <h3> {values.isMember ? "Login" : "Register"} </h3>
              {showAlert && <Alert />}
              {!values.isMember && (
                <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />
              )}
              
              <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />
              <FormRow type="password" name="password" value={values.password} handleChange={handleChange} />
              <button type="submit" className="btn btn-block" disabled={isLoading}>Submit</button>

              <p>
                  {values.isMember ? "Not a member yet ? " : "Already a member ?"}
                  <button type="button" onClick={toggleMember} className="member-btn">
                  {values.isMember ? "Register" : "Login"}
                  </button>
              </p>
          </form>
      </Wrapper>
    )
  }
  
  export default Register