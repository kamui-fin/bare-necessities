import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts"; 

function Graph(){
    const pdata = [
        {
            week: 1,
            rank: 5,
        },
        {
            week: 2,
            rank: 6,
        },
        {
            week: 3,
            rank: 10,
        },
        {
            week: 4,
            rank: 5,
        },
        {
            week: 5,
            rank: 4,
        },
        {
            week: 6,
            rank: 8,
        },
        {
            week: 7,
            rank: 5,
        },
        {
            week: 8,
            rank: 6,
        },
        {
            week: 9,
            rank: 10,
        },
        {
            week: 10,
            rank: 5,
        },
        {
            week: 11,
            rank: 4,
        },
        {
            week: 12,
            rank: 8,
        }];

    return (
        <>
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={pdata} >
                <CartesianGrid />
                <XAxis dataKey="week" interval={"preserveStartEnd"} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line
                    dataKey='week'
                    stroke='black'
                />
                <Line dataKey="rank" stroke="red" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    </>
      );
}

export default Graph;

