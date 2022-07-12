import { Global } from "@emotion/react"

// If JetbrainsMono font wont work on other PC's

const Fonts = () => (
    <Global styles={`
    @font-face: {
        src: url('../../lib/fonts/JetBrainsMono-Regular.ttf')
    }
    `} />
)

export default Fonts