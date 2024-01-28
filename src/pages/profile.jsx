import '../styles/profile.css'
import { Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import { Tag, TagLabel } from '@chakra-ui/react'
import Graph from './graph.jsx'
import { leader_data } from './leaderboard'
import { Card } from '@chakra-ui/react'
import { useParams } from 'react-router'

function Profile() {
    const { id } = useParams()
    let data
    if (!id) {
        data = leader_data.people[0]
    } else {
        data = leader_data.people.find((e) => e.id === Number.parseInt(id))
    }
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
                margin={'2.5rem'}
                gap={4}
            >
                <GridItem colSpan={2} className="img-container">
                    <Image
                        borderRadius="full"
                        boxSize="15em"
                        src={data.image_link}
                    />
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
                    <Card
                        borderRadius={'2rem'}
                        bg={'#edf2f7'}
                        className="card"
                        h={'10rem'}
                        w={'10rem'}
                    >
                        <div className="rank-font">#{data.id}</div>
                    </Card>
                </GridItem>
            </Grid>
            <div className="bottom">
                <Graph />
            </div>
        </div>
    )
}

export default Profile
