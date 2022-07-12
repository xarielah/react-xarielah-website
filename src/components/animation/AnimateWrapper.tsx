import React from "react"

type Props = {
    children: JSX.Element
}

const AnimateWrapper: React.FC<Props> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export default AnimateWrapper