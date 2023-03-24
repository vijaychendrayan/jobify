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
    profit:0,
    rate:0,
   
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
        if(e.target.name == 'loomWidth'){
            console.log('loom width')
        }
        
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(values)
        // console.log('warpCount :', values.warpCount)
        // console.log('weftCount :', values.weftCount)
        // console.log('Reed :', values.reed)
        // console.log('pick :', values.pick)
        // console.log('loomWidth :', values.loomWidth)
        // console.log('warpGms :', values.warpGms)
        // console.log('weftGms :', values.weftGms)
        // console.log('ends :', values.ends)
        // console.log('warpYarnCost :', values.warpYarnCost)
        // console.log('weftYarnCost :', values.weftYarnCost)
        // console.log('warpYarnDyeCost :', values.warpYarnDyeCost)
        // console.log('weftYarnDyeCost :', values.weftYarnDyeCost)
        // console.log('dyeingWastage :', values.dyeingWastage)
        // console.log('loomCrimp :', values.loomCrimp)
        // console.log('washingShrinkage :', values.washingShrinkage)
        // console.log('warpingCharge :', values.warpingCharge)
        // console.log('sizingCharge :', values.sizingCharge)
        // console.log('washingCharge :', values.washingCharge)
        // console.log('pickRate :', values.pickRate)
        // console.log('packTrans :', values.packTrans)
        // console.log('expense :', values.expense)
        // console.log('profit :', values.profit)
        console.log("-----------------------------------------------------------")
        const calcEnds = (parseFloat(values.reed) - 8 ) * parseFloat(values.loomWidth)
        console.log("Ends : ", calcEnds)
        
        const checkWC = (1.4/4000) * calcEnds
        console.log(checkWC)
        var finalWarpingCharge
        if (checkWC >= 1.4){
             finalWarpingCharge = checkWC
        }
        else  finalWarpingCharge = 1.4
        console.log(finalWarpingCharge)
        const WG = ((parseFloat(values.reed) - 8)*(parseFloat(values.loomWidth)   * 0.00059))/ parseFloat(values.warpCount)
        const EG = ((parseFloat(values.pick) - 4)*(parseFloat(values.loomWidth)+3)* 0.00059)/ parseFloat(values.weftCount)
        const W11 = parseFloat(values.warpYarnCost)+parseFloat(values.warpYarnDyeCost)
        const W12 = W11 * (parseFloat(values.dyeingWastage)/100)
        const W1 = ( W11 + W12 ) * WG
        // const W1 = ((values.warpYarnCost+values.warpYarnDyeCost)+((values.warpYarnCost+values.warpYarnDyeCost)* (values.dyeingWastage/100)))*WG
        const W2 = (W1 + (W1 * (parseFloat(values.loomCrimp)/100)))
        const E11 = parseFloat(values.weftYarnCost)+ parseFloat(values.weftYarnDyeCost)
        console.log('E11 : ', E11)
        const E12 = E11 * (parseFloat(values.dyeingWastage)/100)
        console.log('E12 : ', E12)
        const E1 = (E11 + E12) * EG
        // const E1 = ((values.weftYarnCost+values.weftYarnDyeCost)+((values.weftYarnCost+values.weftYarnDyeCost)*(values.dyeingWastage/100)))/EG
        const C1 = W2+E1+finalWarpingCharge+parseFloat(values.sizingCharge)+parseFloat(values.washingCharge)+ ((parseFloat(values.pick)-4)*parseFloat(values.pickRate))
        const C2 = C1 + ( C1 * (parseFloat(values.washingShrinkage)/100))
        const C3 = C2 + parseFloat(values.packTrans) + parseFloat(values.expense)
        const R =  C3 + ( C3 * (parseFloat(values.profit)/100))
        setValues({...values,warpingCharge : finalWarpingCharge})
        setValues({...values,weftGms : EG})
        setValues({...values,rate : R})
        setValues({...values,ends : calcEnds})
        setValues({...values,warpGms : WG})
        console.log('WG : ', WG)
        console.log('EG : ', EG)
        console.log('W1 : ', W1)
        console.log('W2 : ', W2)
        console.log('E1 : ', E1)
        console.log('C1 : ', C1)
        console.log('C2 : ', C2)
        console.log('C3 : ', C3)
        console.log('R  : ', R)
        // -------------------------------------------------
        // console.log(values)
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
        console.log('Rate : ', values.rate)
        // -------------------------------------------------
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
                        <FormRow type="number" name="rate" value={values.rate} handleChange={handleChange}/>
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