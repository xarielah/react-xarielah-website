import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import { isWhiteSpaceLike } from "typescript"

//https://coolors.co/palette/ff6d00-ff7900-ff8500-ff9100-ff9e00-240046-3c096c-5a189a-7b2cbf-9d4edd

const styles = {
    global:
    {
        body: {
            bg: 'coolPurple.500',
            fontSize: '1.3em',
            color: '#FAFAFA'
        }
    }
}

const colors = {
    coolPurple: {
        100: '#e3bfff',
        200: '#7B2CBF',
        300: '#5A189A',
        400: '#3C096C',
        500: '#240046'
    },
    coolOrange: {
        500: '#FF6D00',
        400: '#FF7900',
        300: '#FF8500',
        200: '#FF9100',
        100: '#FF9E00'
    },
    transBlack: '#00000055'
}

const fonts = {
    body: 'JetBrains Mono, monospace',
    heading: 'JetBrains Mono, monospace'
}

const components = {
    Text: {
        variants: {
            'menu-item': {
                transition: 'all 400ms ease-in-out',
            }
        }
    }
}

const theme = extendTheme({ components, fonts, styles, colors })

export default theme