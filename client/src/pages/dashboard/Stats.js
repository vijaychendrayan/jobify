import { useEffect } from "react"
import { useAppContext } from "../../context/appContext"
import { StatsContainer,  ChartsContainer } from "../../components"

const Stats = () => {
    const {showStats,  monthlyApplications}= useAppContext()
    useEffect(()=>{
        showStats()
        // eslint-disable-next-line
    },[])
    return (
        <>
            <StatsContainer />
            <ChartsContainer />
            {monthlyApplications > 0 && <ChartsContainer />}
            
        </>
    )
}

export default Stats