import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

const AreaChartComponent = ({data}) => {
    return(
        <ResponsiveContainer width='100%' height={300}>
            <AreaChart data={data} margin={{top:50}}>
                <CartesianGrid strokeDasharray='3 3'/>
                <XAxis dataKey='date' />
                <YAxis allowDecimal = {false} />
                <Tooltip/>
                <Area type='monotone' dataKey='count' fill='#2cb1bc' barSize={75}/>
            </AreaChart>
        </ResponsiveContainer>
    )

}

export default AreaChartComponent