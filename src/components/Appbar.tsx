import React, { useState } from 'react';
import { Box, Typography, Drawer } from '@mui/material';
import LogoMoon from './LogoMoon';

const letterSx = {
    color: "white", fontFamily: "serif", fontSize: "1rem",
    backgroundImage: 'linear-gradient(currentColor, currentColor)',
    backgroundPosition: '0% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0% 2px',
    transition: 'background-size 0.3s ease',
    '&:hover': { backgroundSize: '100% 2px', cursor: 'pointer' }
};

const scrollTo = (id: string, onDone?: () => void) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onDone?.();
};

const navItems = [
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'PROJECTS',   id: 'projects'   },
    { label: 'SKILLS',     id: 'skills'     },
    { label: 'CONTACT',    id: 'contact'    },
];

const AppBar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Box sx={{ position: 'sticky', top: 0, zIndex: 100, }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: { xs: 2, md: 4 }, py: 2 }}>
                    <LogoMoon />

                    {/* Desktop nav */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: { sm: 4, md: 7 } }}>
                        {navItems.map(({ label, id }) => (
                            <Typography key={id} sx={letterSx} onClick={() => scrollTo(id)}>
                                {label}
                            </Typography>
                        ))}
                    </Box>

                    {/* Mobile hamburger — only logo visible, hamburger opens drawer */}
                    <Box
                        onClick={() => setDrawerOpen(true)}
                        sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', gap: '5px', cursor: 'pointer', p: 1 }}
                    >
                        {[0, 1, 2].map(i => (
                            <Box key={i} sx={{ width: 22, height: '2px', background: 'white', borderRadius: '2px' }} />
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Side nav drawer — mobile only */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': {
                        width: 240,
                        background: 'rgba(5, 20, 18, 0.97)',
                        backdropFilter: 'blur(16px)',
                        borderLeft: '1px solid rgba(255,255,255,0.08)',
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        py: 4,
                        px: 3,
                    },
                }}
            >
                {/* Drawer header */}
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
                        <LogoMoon />
                        {/* Close button */}
                        <Box
                            onClick={() => setDrawerOpen(false)}
                            sx={{ cursor: 'pointer', color: 'rgba(255,255,255,0.5)', fontSize: '1.4rem', lineHeight: 1, '&:hover': { color: 'white' }, transition: 'color 0.2s' }}
                        >
                            ✕
                        </Box>
                    </Box>

                    {/* Nav links */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {navItems.map(({ label, id }, i) => (
                            <Box key={id} onClick={() => scrollTo(id, () => setDrawerOpen(false))} sx={{ display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }}>
                                <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
                                    0{i + 1}.
                                </Typography>
                                <Typography sx={{ ...letterSx, fontSize: '1.05rem' }}>
                                    {label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Drawer footer */}
                <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>
                    © {new Date().getFullYear()} Munirah
                </Typography>
            </Drawer>
        </>
    );
};

export default AppBar;
