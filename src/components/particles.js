import React from "react";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {loadPolygonMaskPlugin} from "@tsparticles/plugin-polygon-mask";
import { loadSlim } from "@tsparticles/slim";
import profileSVG from '../assets/images/profilePic.svg'

export function ParticlesContainer() {
    const [init, setInit] = useState(false);
    const deerurl = "https://particles.js.org/images/smalldeer.svg"

  // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            await loadPolygonMaskPlugin(engine);
        }).then(() => {
            setInit(true);
        }).catch((error) => {
            console.error("Particles Engine initialization failed:", error);
        })
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    const options = useMemo(
        ()=> ({
            fpsLimit: 20,
            autoPlay: true,
            fullScreen: {
                enable: true,
                zIndex: 0
            },
            particles: {
                bounce: {
                    horizontal: {
                        value: 1
                    },
                    verticle: {
                        value: 1
                    }
                },
                collisions: {
                    effect: {
                        close: true,
                        fill: true,
                        options: {},
                        type: {}
                    },
                    absorb: {
                        speed: 2
                    },
                    bounce: {
                        horizontal: {
                            value: 1
                        },
                        verticle: {
                            value: 1
                        }
                    },
                    enable: false,
                    maxSpeed: 50,
                    mode: "bounce",
                    overlap: {
                        enable: true,
                        retries: 0
                    }
                },
                number: {
                    value: 220,
                    density: {
                        enable: true,
                        value_area: 8000
                    }
                },
                links: {
                    enable: true,
                    distance: 130,
                    color: "#ffffff",
                    opacity: 0.7,
                    width: 1
                },
                color: {
                    value: "#ffffff"
                },
                opacity: {
                    value: 0.5,
                    anim: {
                        enable: true
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3
                    }
                },
                move: {
                    angle: {
                        offset: 0,
                        value: 90
                      },
                      attract: {
                        distance: 200,
                        enable: false,
                        rotate: {
                          x: 3000,
                          y: 3000
                        }
                      },
                      center: {
                        x: 150,
                        y: 50,
                        mode: "percent",
                        radius: 0
                      },
                      decay: 0,
                      distance: {},
                      direction: "none",
                      drift: 0,
                      enable: true,
                      gravity: {
                        acceleration: 9.81,
                        enable: false,
                        inverse: false,
                        maxSpeed: 50
                      },
                      path: {
                        clamp: true,
                        delay: {
                          value: 0
                        },
                        enable: true,
                        options: {}
                      },
                      outModes: {
                        default: "out",
                        bottom: "out",
                        left: "out",
                        right: "out",
                        top: "out"
                      },
                      random: false,
                      size: false,
                      speed: 1,
                      spin: {
                        acceleration: 0,
                        enable: false
                      },
                      straight: false,
                      trail: {
                        enable: false,
                        length: 10,
                        fill: {}
                      },
                      vibrate: false,
                      warp: false
                },
            },
            polygon: {
                position: {
                    x: 92,
                    y: 70
                },
                enable: true,
                type: "inline", // "inline" for using SVG path
                url: profileSVG, // Ensure this is the correct path to your SVG
                scale: -0.15, // Adjust as needed
                inline: {
                  arrangement: "equidistant"
                },
                move: {
                  radius: 50,
                  type: "path"
                },
                draw: {
                  enable: true,
                  stroke: {
                    color: "rgba(255, 255, 255, 1)" // Adjust the color as needed
                  }
                }
            },
            interactivity: {
                detectsOn: 'window',
                events: {
                    onHover: {
                        enable: true,
                        mode: "bubble"
                    }
                },
                modes: {
                    bubble: {
                        size: 60,
                        distance: 40
                    }
                }
            }
        }),[]
    )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
