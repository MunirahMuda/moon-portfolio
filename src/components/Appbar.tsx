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

const AppBar: React.FC = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", p: 2 }}>
            <LogoMoon />
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", gap: 7 }}>
                <Typography sx={letterSx}>ABOUT</Typography>
                <Typography sx={letterSx}>SKILLS</Typography>
                <Typography sx={letterSx}>WORK</Typography>
                <Typography sx={letterSx}>CONTACT</Typography>
            </Box>
        </Box>
    )
}

export default AppBar;
