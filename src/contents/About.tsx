import React from 'react';
import { Box, Typography } from '@mui/material';

const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const About: React.FC = () => {
    return (
        <Box id="about" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2, md: 4 },
            flex: 1,
            minHeight: 0,
            width: '100%',
            maxWidth: 1100,
            mx: 'auto',
            height: { xs: 'auto', md: '90vh' },
            py: { xs: 6, md: 0 },
            px: { xs: 3, md: 0 },
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mr: { xs: 0, md: 5 } }}>
                {/* Outer container sized to fit the largest ring */}
                <Box sx={{
                    position: 'relative',
                    width: 310,
                    height: 550,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: { xs: 'scale(0.7)', md: 'scale(1)' },
                    transformOrigin: 'center center',
                    my: { xs: '-83px', md: 0 },
                }}>
                    {/* Ring 1 */}
                    <Box sx={{ position: 'absolute', width: 270, height: 500, border: '1px solid rgba(255,255,255,0.2)', borderRadius: '135px', pointerEvents: 'none' }} />
                    {/* Ring 2 */}
                    <Box sx={{ position: 'absolute', width: 310, height: 550, border: '1px solid rgba(255,255,255,0.12)', borderRadius: '155px', pointerEvents: 'none' }} />

                    {/* Orbiting stars via SVG animateMotion */}
                    <Box
                        component="svg"
                        viewBox="0 0 310 550"
                        sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible', pointerEvents: 'none' }}
                    >
                        <defs>
                            <filter id="starGlow">
                                <feGaussianBlur stdDeviation="1.5" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>

                        <polygon points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5" fill="#009978" filter="url(#starGlow)">
                            <animateMotion dur="9s" repeatCount="indefinite" rotate="0"
                                path="M 155,25 A 135,250 0 0 1 155,525 A 135,250 0 0 1 155,25" />
                        </polygon>

                        <polygon points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5" fill="#5aa3f1" filter="url(#starGlow)">
                            <animateMotion dur="14s" repeatCount="indefinite" rotate="0" begin="-7s"
                                path="M 155,0 A 155,275 0 0 1 155,550 A 155,275 0 0 1 155,0" />
                        </polygon>
                    </Box>

                    {/* Profile pill */}
                    <Box sx={{ border: '1px solid white', borderRadius: '120px', height: '450px', width: '230px', p: 1, display: 'flex', zIndex: 1 }}>
                        <Box sx={{ borderRadius: '120px', overflow: 'hidden', flex: 1, height: '100%' }}>
                            <Box component="img" src={`${import.meta.env.BASE_URL}moonPic.webp`} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <Typography sx={{ fontFamily: 'serif', fontSize: { xs: '1.5rem', md: '2rem' } }}>Hello I'm</Typography>
                    <Typography sx={{ fontFamily: 'serif', fontSize: { xs: '2rem', md: '3rem' }, color: '#5aa3f1' }}>Munirah</Typography>
                </Box>
                <Typography sx={{ fontFamily: 'serif', fontSize: { xs: '1rem', md: '1.5rem' }, textAlign: { xs: 'center', md: 'left' } }}>
                    Frontend UI/UX Developer • Project Manager
                </Typography>
                <Typography sx={{ fontFamily: 'serif', fontSize: { xs: '0.95rem', md: '1.2rem' }, fontStyle: 'italic', mb: 1, textAlign: { xs: 'center', md: 'left' } }}>
                    Like the moon guiding the tide, <br /> I design interfaces that move with purpose.
                </Typography>
                <Box
                    sx={{
                        px: 2, py: 0.5,
                        border: '1px solid white',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(to right, white 50%, transparent 50%)',
                        backgroundSize: '200% 100%',
                        backgroundPosition: 'right',
                        transition: 'background-position 0.4s ease',
                        '&:hover': {
                            backgroundPosition: 'left',
                            '& .chip-label': { color: '#0a3d2e' },
                        },
                    }}
                >
                    <Typography
                        onClick={() => scrollTo('contact')}
                        className="chip-label"
                        sx={{ transition: 'color 0.4s ease', color: 'white', position: 'relative', zIndex: 1 }}
                    >
                        Let's talk
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
