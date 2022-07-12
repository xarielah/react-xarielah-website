import { useCallback, useMemo } from 'react'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'

const ParticlesComponent = () => {
    const options = useMemo(() => ({
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    duration: 2,
                    quantity: 1
                },
                repulse: {
                    distance: 100,
                    radius: 50,
                    duration: 2,
                },
            },
        },
        particles: {
            links: {
                enable: true,
                distance: 100
            },
            move: {
                enable: true,
                speed: { min: .2, max: 1 }
            },
            size: {
                value: { min: 1, max: 2 }
            },
            opacity: {
                value: { min: .1, max: .13 }
            }
        }
    }), [])

    const particlesInit = useCallback((engine: Engine): Promise<void> => {
        return loadFull(engine)
    }, [])

    return <Particles init={particlesInit} options={options} />
}

export default ParticlesComponent