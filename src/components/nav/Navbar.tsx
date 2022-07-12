import React from 'react'
import { StackDivider, HStack, Text, Link, Box } from '@chakra-ui/react'
import { Link as ReactLink } from 'react-router-dom'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Navbar: React.FC = () => {
    return (
        <Box position="absolute"
            left={0}
            right={0}
            my={3}
        >
            <ReactLink to="/" style={{ padding: 0, margin: 0 }}>
                <Box
                    position="absolute"
                    bg="transBlack"
                    m={{ base: 0, md: 4 }}
                    ml={{ base: 3, md: 0 }}>
                    <Text fontSize={{ base: '.8rem', md: '1.2rem' }} fontWeight="bold" letterSpacing={'wide'} display={{ base: 'inline', md: 'none' }}>{'</>'}</Text>
                    <Text fontSize='1.2rem' fontWeight="bold" letterSpacing={'wide'} display={{ base: 'none', md: 'inline' }}>{'<xarielah/>'}</Text>
                </Box>
            </ReactLink>
            <HStack
                divider={< StackDivider />}
                spacing={4}
                w="max-content"
                margin="0 auto"
                fontWeight='bold'
                fontSize={{ base: '.7em', md: '1.2em' }}
                px={3}
                color="coolPurple.100"
                py={2}
                bg="transBlack" >
                <ReactLink to="/works">
                    <Text _hover={{ color: 'white !important' }} variant="menu-item">Works</Text>
                </ReactLink>
                <ReactLink to="/about">
                    <Text _hover={{ color: 'white !important' }} variant="menu-item">
                        About
                    </Text>
                </ReactLink>
                <Link target="_blank" href="https://www.linkedin.com/in/ariel-aharon-580899202/">
                    <Text _hover={{ color: 'white !important' }} variant="menu-item">
                        <BsLinkedin />
                    </Text>
                </Link>
                <Link target="_blank" href="https://github.com/xarielah">
                    <Text _hover={{ color: 'white !important' }} variant="menu-item">
                        <BsGithub />
                    </Text>
                </Link>
            </HStack >
        </Box>
    )
}

export default Navbar