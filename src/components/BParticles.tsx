import {useEffect, useMemo, useState} from 'react';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
    type ISourceOptions,
} from "@tsparticles/engine";

function BParticles() {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: {
                enable: false,
                zIndex: 1,
            },
            background: {
                color: {
                    value: "#0d47a1",
                },
                opacity: 0,
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
            },
            particles: {
                color: {
                    value: "#00b5ff",
                },
                links: {
                    color: "#00b5ff",
                    distance: 150,
                    enable: true,
                    opacity: 0.7,
                    width: 2,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 3,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "star",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
                className={"absolute top-0 left-0 w-full h-full z-[1] pointer-events-none"}
            />
        );
    }
    return <></>;
}

export default BParticles;