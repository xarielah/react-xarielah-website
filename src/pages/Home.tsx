import React from 'react'
import { Heading, Box, Text, Container } from '@chakra-ui/react'
import Navbar from '../components/nav/Navbar'

const Home: React.FC = () => {
    return (
        <Box textAlign="center">
            <Container p={0}>
                {/* <Navbar /> */}
                <Heading margin="0 auto" letterSpacing="tighter" fontSize={{ base: '4rem', sm: '6rem', md: '8rem' }}>xarielah</Heading>
                <Text bg="#00000055" fontWeight="bold" px={3} py={2}>Passionate FullStack Developer</Text>
            </Container>
        </Box>
    )
}

export default Home