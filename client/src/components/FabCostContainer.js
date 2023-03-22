import {FormRow, FormRowSelect} from '.'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'

const FabCostContainer = ()=> {
    const{
        isLoading,
        search,
        searchStatus,
        searchType,
        sort,
        sortOptions,
        statusOptions,
        jobTypeOptions,
        handleChange,
        clearFilters,
        warpCount,
        weftCount,
        reed,pick,loomWidth,warpGms,
        weftGms,ends,warpYarnCost,weftYarnCost,warpYarnDyeCost,weftYarnDyeCost,
        dyeingWastage,loomCrimp,washingShrinkage,warpingCharge,sizingCharge,
        washingCharge,pickRate,packTrans,expense,profit,testval
    } = useAppContext()

    const handleSearch = (e) => {
        if(isLoading) return
        handleChange({name:e.target.name, value: e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('WarpCount', warpCount,search)
        clearFilters()
    }

    return(
        <Wrapper>
            <form className='form'>
                <h4>Fabric Cost Calculation</h4>
                <div className='form-center'>
                    <FormRow type="text" name='search' value={search} handleChange={handleSearch} />
                    <div>
                        <FormRow type='text' name="Warp Count" value={warpCount} handleChange={handleSearch} />
                        <FormRow type="text" name='Reed' value={reed} handleChange={handleSearch}/>
                        <FormRow type="text" name="Warp Gms" value={warpGms} handleChange={handleSearch}/>
                    </div> 
                
                    <div>
                        <FormRow type="text" name="Weft Count" value={weftCount} handleChange={handleSearch}/>
                        <FormRow type="text" name="Pick" value={pick} handleChange={handleSearch}/>
                        <FormRow type="text" name="Weft Gms" value={weftGms} handleChange={handleSearch}/>
                    </div>
                    
                    <div>
                        <FormRow type="text" name="Loom Width" value={loomWidth} handleChange={handleSearch}/>
                        <FormRow type="text" name="Ends" value={ends} handleChange={handleSearch}/>
                    </div>
                    
                    <div>
                        <FormRow type="text" name="Warp Yarn Cost" value={warpYarnCost} handleChange={handleSearch}/>
                        <FormRow type="text" name="Warp Yarn Dye Cost" value={warpYarnDyeCost} handleChange={handleSearch}/>
                    </div>

                    <div>
                        <FormRow type="text" name="Weft Yarn Cost" value={weftYarnCost} handleChange={handleSearch}/>
                        <FormRow type="text" name="Weft Yarn Dye Cost" value={weftYarnDyeCost} handleChange={handleSearch}/>
                    </div>
                    
                    <div>
                        <FormRow type="text" name="Dyeing Wastage" value={dyeingWastage} handleChange={handleSearch}/>
                    </div>
                    
                    <div>
                        <FormRow type="text" name="Loom Crimp" value={loomCrimp} handleChange={handleSearch}/>
                        <FormRow type="text" name="Warping Charge" value={warpingCharge} handleChange={handleSearch}/>
                        <FormRow type="text" name="Washing Charge" value={washingCharge} handleChange={handleSearch}/>
                        <FormRow type="text" name="Pack and Trans" value={packTrans} handleChange={handleSearch}/>
                        <FormRow type="text" name="Profit" value={profit} handleChange={handleSearch}/>
                    </div>
                    
                    <div>
                        <FormRow type="text" name="Washing Shrinkage" value={washingShrinkage} handleChange={handleSearch}/>
                        <FormRow type="text" name="Sizing Charge" value={sizingCharge} handleChange={handleSearch}/>
                        <FormRow type="text" name="Pick Rate" value={pickRate} handleChange={handleSearch}/>
                        <FormRow type="text" name="Expense" value={expense} handleChange={handleSearch}/>
                    </div>
                    
                    <button className='btn btn-block ' disabled={isLoading} onClick={handleSubmit}>
                                Calculate Cost
                    </button>
                    

                </div>
            </form>
        </Wrapper>
    )
}

export default FabCostContainer