import {FormRow, FormRowSelect} from '.'
import { useState, useEffect } from "react"
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/SearchContainer'


const initialState = {
    warpCount:0,
    weftCount:0,
    reed:0,
    pick:0,
    loomWidth:0,
    warpGms:0,
    weftGms:0,
    ends:0,
    warpYarnCost:0,
    weftYarnCost:0,
    warpYarnDyeCost:0,
    weftYarnDyeCost:0,
    dyeingWastage:0,
    loomCrimp:0,
    washingShrinkage:0,
    warpingCharge:0,
    sizingCharge:0,
    washingCharge:0,
    pickRate:0,
    packTrans:0,
    expense:0,
    profit:0
   
}


const FabCostContainer = ()=> {
    const [values, setValues] = useState(initialState);
    const{
        isLoading,
        search,
        searchStatus,
        searchType,
        sort,
        sortOptions,
        statusOptions,
        jobTypeOptions,
       
        clearFilters,
        
    } = useAppContext()

    const handleChange = (e) => {
        if(isLoading) return
        setValues({...values,[e.target.name]: e.target.value})
        
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(values)
        console.log('warpCount :', values.warpCount)
        console.log('weftCount :', values.weftCount)
        console.log('Reed :', values.reed)
        console.log('pick :', values.pick)
        console.log('loomWidth :', values.loomWidth)
        console.log('warpGms :', values.warpGms)
        console.log('weftGms :', values.weftGms)
        console.log('ends :', values.ends)
        console.log('warpYarnCost :', values.warpYarnCost)
        console.log('weftYarnCost :', values.weftYarnCost)
        console.log('warpYarnDyeCost :', values.warpYarnDyeCost)

        console.log('weftYarnDyeCost :', values.weftYarnDyeCost)
        console.log('dyeingWastage :', values.dyeingWastage)
        console.log('loomCrimp :', values.loomCrimp)
        console.log('washingShrinkage :', values.washingShrinkage)
        console.log('warpingCharge :', values.warpingCharge)
        console.log('sizingCharge :', values.sizingCharge)
        console.log('washingCharge :', values.washingCharge)
        console.log('pickRate :', values.pickRate)
        console.log('packTrans :', values.packTrans)
        console.log('expense :', values.expense)
        console.log('profit :', values.profit)

    

   
        clearFilters()
    }

    return(
        <Wrapper>
            <form className='form'>
                <h4>Fabric Cost Calculation</h4>
                <div className='form-center'>
                    
                    <div>
                        <FormRow type='number' name="warpCount" value={values.warpCount} handleChange={handleChange} />
                        <FormRow type="number" name='reed' value={values.reed} handleChange={handleChange}/>
                        <FormRow type="number" name="warpGms" value={values.warpGms} handleChange={handleChange}/>
                    </div> 
                
                    <div>
                        <FormRow type="number" name="weftCount" value={values.weftCount} handleChange={handleChange}/>
                        <FormRow type="number" name="pick" value={values.pick} handleChange={handleChange}/>
                        <FormRow type="number" name="weftGms" value={values.weftGms} handleChange={handleChange}/>
                    </div>
                    
                    <div>
                        <FormRow type="number" name="loomWidth" value={values.loomWidth} handleChange={handleChange}/>
                        <FormRow type="number" name="ends" value={values.ends} handleChange={handleChange}/>
                    </div>
                    
                    <div>
                        <FormRow type="number" name="warpYarnCost" value={values.warpYarnCost} handleChange={handleChange}/>
                        <FormRow type="number" name="warpYarnDyeCost" value={values.warpYarnDyeCost} handleChange={handleChange}/>
                    </div>

                    <div>
                        <FormRow type="number" name="weftYarnCost" value={values.weftYarnCost} handleChange={handleChange}/>
                        <FormRow type="number" name="weftYarnDyeCost" value={values.weftYarnDyeCost} handleChange={handleChange}/>
                    </div>
                    
                    <div>
                        <FormRow type="number" name="dyeingWastage" value={values.dyeingWastage} handleChange={handleChange}/>
                    </div>
                    
                    <div>
                        <FormRow type="number" name="loomCrimp" value={values.loomCrimp} handleChange={handleChange}/>
                        <FormRow type="number" name="warpingCharge" value={values.warpingCharge} handleChange={handleChange}/>
                        <FormRow type="number" name="washingCharge" value={values.washingCharge} handleChange={handleChange}/>
                        <FormRow type="number" name="packTrans" value={values.packTrans} handleChange={handleChange}/>
                        <FormRow type="number" name="profit" value={values.profit} handleChange={handleChange}/>
                    </div>
                    
                    <div>
                        <FormRow type="number" name="washingShrinkage" value={values.washingShrinkage} handleChange={handleChange}/>
                        <FormRow type="number" name="sizingCharge" value={values.sizingCharge} handleChange={handleChange}/>
                        <FormRow type="number" name="pickRate" value={values.pickRate} handleChange={handleChange}/>
                        <FormRow type="number" name="expense" value={values.expense} handleChange={handleChange}/>
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