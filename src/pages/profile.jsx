import '../styles/profile.css'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import { Tag, TagLabel } from '@chakra-ui/react'
import Graph from './graph.jsx'
import { Card } from '@chakra-ui/react'

const data = {
    name: 'Venkatasai Gudisa',
    pfp: 'https://bit.ly/dan-abramov',
    rank: 2,
    tags: [
        {
            name: 'JAN24',
            weeks: 2,
        },
        {
            name: 'DEC23',
            weeks: 1,
        },
        {
            name: 'NOV23',
            weeks: 3,
        },
    ],
}

function Profile() {
    function getTag(str, numWeeks) {
        let color = ''
        switch (numWeeks) {
            case 1:
                color = '#8cffec'
                break
            case 2:
                color = '#6dc6b7'
                break
            case 3:
                color = '#509186'
                break
            case 4:
                color = '#6dc6b7'
                break
        }

        return (
            <Tooltip label={numWeeks + ' weeks'} aria-label="A tooltip">
                <Tag size="lg" bg={color} borderRadius="full" className="tag">
                    <TagLabel className="inner-tag">{str}</TagLabel>
                </Tag>
            </Tooltip>
        )
    }

    return (
        <div className="page">
            <Grid
                h="100rem"
                w="90rem"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(9, 1fr)"
                flex={'left'}
                gap={4}
            >
                <GridItem rowSpan={1} colSpan={1}></GridItem>
                <GridItem rowSpan={1} colSpan={1}></GridItem>
                <GridItem colSpan={2} className="img-container">
                    <Image borderRadius="full" boxSize="15em" src={data.pfp} />
                </GridItem>
                <GridItem colSpan={3} className="txt-container">
                    <div className="txt-container">
                        <Heading size="lg" style={{ color: '#131515' }}>
                            {data.name}
                        </Heading>
                        <Box
                            w="100%"
                            h="8rem"
                            bg="#edf2f7"
                            p={4}
                            color="beige"
                            borderRadius="2rem"
                            className="badge-box"
                        >
                            <div className="tag-container">
                                {data.tags.map((tag) =>
                                    getTag(tag.name, tag.weeks)
                                )}
                            </div>
                        </Box>
                    </div>
                </GridItem>
                <GridItem colSpan={1} className="rank">
                    <Card borderRadius={'2rem'} bg={'#edf2f7'} className="card">
                        <div>#{data.rank}</div>
                    </Card>
                </GridItem>

                {/* <GridItem colSpan={4} className='bottom' >
                    {plot_graph()}
                </GridItem> */}
            </Grid>
            <div className="bottom">
                <Graph />
            </div>
        </div>
    )
}

export default Profile
