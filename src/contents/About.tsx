import React from 'react';
import { Box, Typography } from '@mui/material';

const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const About: React.FC = () => {
    return (
        <Box id="about" sx={{ display: 'flex', alignItems: "center", justifyContent: "center", gap: 4, flex: 1, minHeight: 0, width: "100%", maxWidth: 1100, mx: "auto", height: "90vh" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mr: 5 }}>

                {/* Outer container sized to fit the largest ring */}
                <Box sx={{ position: "relative", width: 310, height: 550, display: "flex", alignItems: "center", justifyContent: "center" }}>

                    {/* Ring 1 */}
                    <Box sx={{ position: "absolute", width: 270, height: 500, border: "1px solid rgba(255,255,255,0.2)", borderRadius: "135px", pointerEvents: "none" }} />
                    {/* Ring 2 */}
                    <Box sx={{ position: "absolute", width: 310, height: 550, border: "1px solid rgba(255,255,255,0.12)", borderRadius: "155px", pointerEvents: "none" }} />

                    {/* Orbiting stars via SVG animateMotion */}
                    <Box
                        component="svg"
                        viewBox="0 0 310 550"
                        sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible", pointerEvents: "none" }}
                    >
                        <defs>
                            <filter id="starGlow">
                                <feGaussianBlur stdDeviation="1.5" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>

                        {/* Star on ring 1 — teal
                            Two-arc full ellipse: center(155,275) rx=135 ry=250
                            Top(155,25) → right side → Bottom(155,525) → left side → Top */}
                        <polygon
                            points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5"
                            fill="#009978"
                            filter="url(#starGlow)"
                        >
                            <animateMotion
                                dur="9s"
                                repeatCount="indefinite"
                                rotate="0"
                                path="M 155,25 A 135,250 0 0 1 155,525 A 135,250 0 0 1 155,25"
                            />
                        </polygon>

                        {/* Star on ring 2 — blue, slower
                            Two-arc full ellipse: center(155,275) rx=155 ry=275
                            begin="-7s" starts it halfway around so the two stars are on opposite sides */}
                        <polygon
                            points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5"
                            fill="#5aa3f1"
                            filter="url(#starGlow)"
                        >
                            <animateMotion
                                dur="14s"
                                repeatCount="indefinite"
                                rotate="0"
                                begin="-7s"
                                path="M 155,0 A 155,275 0 0 1 155,550 A 155,275 0 0 1 155,0"
                            />
                        </polygon>
                    </Box>

                    {/* Profile pill */}
                    <Box sx={{ border: "1px solid white", borderRadius: "120px", height: "450px", width: "230px", p: 1, display: "flex", zIndex: 1 }}>
                        <Box sx={{ borderRadius: "120px", overflow: "hidden", flex: 1 }}>
                            <Box component="img" src="/moonPic.webp" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
                <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                    <Typography sx={{ fontFamily: "serif", fontSize: "2rem" }}>Hello I'm</Typography>
                    <Typography sx={{ fontFamily: "serif", fontSize: "3rem", color: "#5aa3f1" }}>Munirah</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontFamily: "serif", fontSize: "1.5rem" }}>Frontend UI/UX Developer • Project Manager</Typography>
                </Box>
                <Typography sx={{ fontFamily: "serif", fontSize: "1.2rem", fontStyle: "italic", mb: 1, textAlign: "left" }}>Like the moon guiding the tide, <br /> I design interfaces that move with purpose.</Typography>
                <Box
                    sx={{
                        px: 2,
                        py: 0.5,
                        border: "1px solid white",
                        borderRadius: "999px",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden",
                        background: "linear-gradient(to right, white 50%, transparent 50%)",
                        backgroundSize: "200% 100%",
                        backgroundPosition: "right",
                        transition: "background-position 0.4s ease",
                        "&:hover": {
                            backgroundPosition: "left",
                            "& .chip-label": {
                                color: "#0a3d2e",
                            },
                        },
                    }}
                >
                    <Typography
                        onClick={() => scrollTo('contact')}
                        className="chip-label"
                        sx={{ transition: "color 0.4s ease", color: "white", position: "relative", zIndex: 1 }}
                    >
                        Let's talk
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default About;
