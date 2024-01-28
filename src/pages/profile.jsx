import '../styles/profile.css'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {
    Tag,
    TagLabel,
} from '@chakra-ui/react'
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


function Profile () {
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

    function plot_graph(){
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

    return(
        <div className='page'>
            <Grid
                h='100rem'
                w='80rem'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} bg='tomato'>
                </GridItem>
                <GridItem colSpan={1}  className='img-container'>
                    <div>
                        <Image
                            borderRadius= 'full'
                            boxSize='15em'
                            src='https://bit.ly/dan-abramov'
                            alt='Dan Abramov'
                            />
                     </div>
                </GridItem>
                <GridItem colSpan={1} className='img-container'>
                    <div className='txt-container'>
                            <Heading size='lg' style={{color:'#131515'}}>Venkatasai Gudisa</Heading>
                            <div className='rank'>#3</div>
                     </div>
                </GridItem>
                <GridItem colSpan={1}>
                    <div className='right-half'>
                        
                        <Box w='100%' h='12rem' 
                            bg='#FFFAFB' 
                            p={4} 
                            color='beige' 
                            borderWidth={'.4rem'} 
                            borderColor={'#131515'} 
                            borderRadius='2rem'
                            className='badge-box'
                        >
                            <Tag size='lg' bg='#7DE2D1' borderRadius='full'>
                                <TagLabel>JAN24</TagLabel>
                            </Tag>
                        </Box>
                    </div>
                </GridItem>
                <GridItem colSpan={3} className='bottom' >
                    {plot_graph()}
                </GridItem>
            </Grid>
        </div>
    )

}

export default Profile;