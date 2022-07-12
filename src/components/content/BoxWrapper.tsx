import React from "react"
import { Box } from '@chakra-ui/react'

type Props = {
    children: JSX.Element
}

const BoxWrapper: React.FC<Props> = ({ children }) => {
    return (
        <Box
            p={3}
            bg="transBlack"
        >
            {children}
        </Box>
    )
}

export default BoxWrapper