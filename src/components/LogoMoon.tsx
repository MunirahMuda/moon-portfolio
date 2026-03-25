import React from 'react';
import { Box, Typography } from '@mui/material'

const fontSize = "1.5rem"
const letterSx = { color: "white", fontFamily: "serif", fontSize: fontSize, fontWeight: "bold" };

const LogoMoon: React.FC = () => {
    const [moonHover, setMoonHover] = React.useState<boolean>(false)
    return (
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", "&:hover": {cursor:"pointer"} }} onMouseEnter={() => setMoonHover(true)} onMouseLeave={() => setMoonHover(false)}>
            <Typography sx={letterSx}>m</Typography>
            <Box component="img" src="moonPicV3.webp" sx={{ width: fontSize, height: fontSize, filter: moonHover ? 'drop-shadow(0 0 6px white)' : 'drop-shadow(0 0 0px white)', transition: 'filter 0.4s ease' }} />
            <Typography sx={letterSx}>o</Typography>
            <Typography sx={letterSx}>n</Typography>
        </Box>
    )
}

export default LogoMoon;
