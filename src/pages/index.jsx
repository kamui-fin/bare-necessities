import React from 'react'
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import { Text, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts'
import { Box } from '@chakra-ui/react'
import ReactCalendarHeatmap from 'react-calendar-heatmap'
import 'react-calendar-heatmap/dist/styles.css'

const TopExpenditures = () => (
    <TableContainer>
        <Table variant="simple">
            <TableCaption>Top Expenditures</TableCaption>
            <Thead>
                <Tr>
                    <Th>Item</Th>
                    <Th isNumeric>Cost</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Pizza</Td>
                    <Td isNumeric>$150.3</Td>
                </Tr>
                <Tr>
                    <Td>Cookies</Td>
                    <Td isNumeric>$122.3</Td>
                </Tr>
                <Tr>
                    <Td>Haircut</Td>
                    <Td isNumeric>$100.1</Td>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
)

const fakeData = [
    { date: '2024-01-01', value: 100 },
    { date: '2024-01-02', value: 200 },
    // Add more fake data for January...
    { date: '2024-02-01', value: 150 },
    { date: '2024-02-02', value: 250 },
    // Add more fake data for February...
    { date: '2024-03-01', value: 120 },
    { date: '2024-03-02', value: 180 },
    // Add more fake data for March...
]

const getColorForValue = (value, max) => {
    const green = Math.round((value / max) * 255)
    return `rgb(0, ${green}, 0)`
}

const CalendarHeatmap = () => {
    // Find the maximum expenditure
    const maxExpenditure = Math.max(...fakeData.map((data) => data.value))

    return (
        <div style={{ maxWidth: '600px' }}>
            <ReactCalendarHeatmap
                startDate={new Date('2024-01-01')}
                endDate={new Date('2024-04-31')}
                values={fakeData}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty'
                    }
                    return 'color-filled'
                }}
                tooltipDataAttrs={(value) => {
                    return {
                        'data-tip': `${value.date}: $${value.value}`,
                    }
                }}
                titleForValue={(value) => {
                    return value ? `${value.value}` : null
                }}
                onMouseOver={(event, value) => {
                    console.log('Mouse over', value)
                }}
                onMouseLeave={(event, value) => {
                    console.log('Mouse leave', value)
                }}
                onClick={(event, value) => {
                    console.log('Click', value)
                }}
                transformDayElement={(rect, value) => {
                    if (value) {
                        const color = getColorForValue(
                            value.value,
                            maxExpenditure
                        )
                        return React.cloneElement(rect, {
                            style: { fill: color },
                        })
                    } else {
                        return React.cloneElement(rect)
                    }
                }}
            />
        </div>
    )
}

const month_data = [
    { month: 'January', expenditure: 1000 },
    { month: 'February', expenditure: 1500 },
    { month: 'March', expenditure: 1200 },
    { month: 'April', expenditure: 2000 },
    { month: 'May', expenditure: 1800 },
    { month: 'June', expenditure: 2500 },
    { month: 'July', expenditure: 2200 },
    { month: 'August', expenditure: 2700 },
    { month: 'September', expenditure: 2300 },
    { month: 'October', expenditure: 2000 },
    { month: 'November', expenditure: 3000 },
    { month: 'December', expenditure: 2800 },
]

const LineGraph = () => {
    return (
        <Box w="100%" h="400px">
            <ResponsiveContainer>
                <LineChart data={month_data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="expenditure"
                        stroke="#8884d8"
                    />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    )
}

const data = [
    { name: 'Entertainment', value: 10 },
    { name: 'Education', value: 20 },
    { name: 'Food', value: 30 },
    { name: 'Travel', value: 15 },
    // Add more data as needed
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'] // Add more colors as needed

const PieChartComponent = () => {
    return (
        <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
            >
                {data.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                    />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    )
}

const Index = () => {
    return (
        <div>
            <Heading
                as="h1"
                size="2xl"
                noOfLines={1}
                style={{ paddingBottom: '1rem' }}
            >
                Welcome Back.
            </Heading>

            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <Card variant="filled">
                    <CardHeader>
                        <Heading as="h1" size="md" noOfLines={1}>
                            This Week
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <Heading as="h1" size="2xl" noOfLines={1}>
                            $99.11
                        </Heading>
                    </CardBody>
                </Card>
                <Card variant="filled">
                    <CardHeader>
                        <Heading as="h1" size="md" noOfLines={1}>
                            This Month
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <Heading as="h1" size="2xl" noOfLines={1}>
                            $99.11
                        </Heading>
                    </CardBody>
                </Card>
                <Card variant="filled">
                    <CardHeader>
                        <Heading as="h1" size="md" noOfLines={1}>
                            This Year
                        </Heading>
                    </CardHeader>
                    <CardBody>
                        <Heading as="h1" size="2xl" noOfLines={1}>
                            $99.11
                        </Heading>
                    </CardBody>
                </Card>
            </Grid>

            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                paddingTop={10}
                alignItems={'center'}
            >
                <GridItem>
                    <PieChartComponent />
                </GridItem>
                <GridItem colSpan={2}>
                    <LineGraph />
                </GridItem>
            </Grid>

            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={6}
                paddingTop={10}
                alignItems={'center'}
                justifyContent={'center'}
                paddingBottom={10}
                margin="auto"
            >
                <GridItem>
                    <TopExpenditures />
                </GridItem>
                <GridItem colSpan={2}>
                    <CalendarHeatmap />
                </GridItem>
            </Grid>
        </div>
    )
}

export default Index
