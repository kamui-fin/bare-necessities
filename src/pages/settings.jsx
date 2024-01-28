import '../styles/settings.css'
import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Button,
    Box,
    Heading,
} from '@chakra-ui/react'

const Onboard = () => {
    const [demographics, setDemographics] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        location: '',
    })

    const [financials, setFinancials] = useState({
        annualSalary: '',
        currentNetWorth: '',
    })

    const handleDemographicsChange = (e) => {
        const { name, value } = e.target
        setDemographics((prev) => ({ ...prev, [name]: value }))
    }

    const handleFinancialsChange = (e) => {
        const { name, value } = e.target
        setFinancials((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Heading as="h1" size="3xl" noOfLines={2} paddingBottom={2}>
                Match Settings
            </Heading>
            <p className="bigger">
                Personalize your clans based on your unique circumstances.
            </p>
            <Stack spacing={4} paddingTop={8}>
                <Box p={4} borderWidth="1px" borderRadius="lg">
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input
                            type="text"
                            name="firstName"
                            value={demographics.firstName}
                            onChange={handleDemographicsChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            type="text"
                            name="lastName"
                            value={demographics.lastName}
                            onChange={handleDemographicsChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Location</FormLabel>
                        <Input
                            type="text"
                            name="location"
                            value={demographics.location}
                            onChange={handleDemographicsChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Age</FormLabel>
                        <Input
                            type="number"
                            name="age"
                            value={demographics.age}
                            onChange={handleDemographicsChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <Select
                            name="gender"
                            value={demographics.gender}
                            onChange={handleDemographicsChange}
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </Select>
                    </FormControl>
                </Box>
                <Box p={4} borderWidth="1px" borderRadius="lg">
                    <FormControl>
                        <FormLabel>Annual Salary</FormLabel>
                        <Input
                            type="number"
                            name="annualSalary"
                            value={financials.annualSalary}
                            onChange={handleFinancialsChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Current Net Worth</FormLabel>
                        <Input
                            type="number"
                            name="currentNetWorth"
                            value={financials.currentNetWorth}
                            onChange={handleFinancialsChange}
                        />
                    </FormControl>
                </Box>
                <Button type="submit" bgColor="#339989" color="#fff">
                    Save
                </Button>
            </Stack>
        </form>
    )
}

export default Onboard
