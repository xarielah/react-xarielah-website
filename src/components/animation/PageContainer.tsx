import { motion } from 'framer-motion'
import React from 'react'
import BoxWrapper from '../content/BoxWrapper'


type Props = {
    children: JSX.Element
}

const PageContainerAnimation: React.FC<Props> = ({ children }) => {

    const variants = {
        hidden: { opacity: 0, x: 100, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 100, y: 0 }
    }


    return (
        <motion.article
            variants={variants}
            animate={'enter'}
            exit={'exit'}
            initial={'hidden'}
        >
            <BoxWrapper>
                {children}
            </BoxWrapper>
        </motion.article>
    )
}

export default PageContainerAnimation