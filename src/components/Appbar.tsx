import React from 'react';
import { Box, Typography } from '@mui/material';
import LogoMoon from './LogoMoon';

const fontSize = "1rem"
const letterSx = {
    color: "white", fontFamily: "serif", fontSize: fontSize, backgroundImage: 'linear-gradient(currentColor, currentColor)',
    backgroundPosition: '0% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0% 2px',
    transition: 'background-size 0.3s ease',
    '&:hover': {
        backgroundSize: '100% 2px',
        cursor: 'pointer',
    }
};

const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const AppBar: React.FC = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2, position: "sticky", top: 0, zIndex: 100 }}>
            <LogoMoon />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", gap: 7 }}>
                <Typography sx={letterSx} onClick={() => scrollTo('experience')}>EXPERIENCE</Typography>
                <Typography sx={letterSx} onClick={() => scrollTo('projects')}>PROJECTS</Typography>
                <Typography sx={letterSx} onClick={() => scrollTo('skills')}>SKILLS</Typography>
                <Typography sx={letterSx} onClick={() => scrollTo('contact')}>CONTACT</Typography>
            </Box>
        </Box>
    )
}

export default AppBar;
