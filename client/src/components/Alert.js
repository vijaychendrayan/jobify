import { useAppContext } from "../context/appContext"

const Alert = ()=>{
    const {altertType, alertText } = useAppContext();
    return <div className={`alert alert-${altertType}`}>{alertText}</div>
}

export default Alert