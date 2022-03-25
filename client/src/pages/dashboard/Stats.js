import { useEffect } from "react"
import { useAppContext } from "../../context/appContext"
import { StatsContainer, Loading, ChartsContainer } from "../../components"

const Stats = () => {
    const {showStats, isLoading, monthlyApplications}= useAppContext()
    useEffect(()=>{
        showStats()

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