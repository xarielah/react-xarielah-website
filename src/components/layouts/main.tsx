import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../nav/Navbar'
import Particles from '../particles/Particles'

type Props = {
    children: JSX.Element
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <Box position="relative">
            <Navbar />

            <Container
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                minH="100vh"
                maxW="container.xl"
                zIndex={99}>
                {children}
            </Container>


            <Particles />
        </Box>
    )
}

export default MainLayout