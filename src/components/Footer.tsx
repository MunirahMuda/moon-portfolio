import React from 'react';
import { Box, Typography } from '@mui/material';

const Cityscape: React.FC = () => (
    <Box sx={{ width: '100%', lineHeight: 0, display: 'block' }}>
        <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: '100%', height: '120px', display: 'block' }}
        >
            <defs>
                <linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d2e2a" />
                    <stop offset="100%" stopColor="#071a17" />
                </linearGradient>
            </defs>

            {/* Far background buildings */}
            <rect x="0"   y="85" width="60"  height="35" fill="url(#buildingGrad)" />
            <rect x="55"  y="70" width="45"  height="50" fill="url(#buildingGrad)" />
            <rect x="95"  y="80" width="35"  height="40" fill="url(#buildingGrad)" />
            <rect x="125" y="60" width="50"  height="60" fill="url(#buildingGrad)" />
            <rect x="170" y="75" width="30"  height="45" fill="url(#buildingGrad)" />
            <rect x="195" y="55" width="55"  height="65" fill="url(#buildingGrad)" />
            <rect x="245" y="72" width="40"  height="48" fill="url(#buildingGrad)" />
            <rect x="280" y="50" width="60"  height="70" fill="url(#buildingGrad)" />
            <rect x="335" y="65" width="35"  height="55" fill="url(#buildingGrad)" />
            <rect x="365" y="45" width="70"  height="75" fill="url(#buildingGrad)" />
            <rect x="430" y="68" width="40"  height="52" fill="url(#buildingGrad)" />
            <rect x="465" y="55" width="50"  height="65" fill="url(#buildingGrad)" />
            <rect x="510" y="40" width="65"  height="80" fill="url(#buildingGrad)" />
            <rect x="570" y="70" width="35"  height="50" fill="url(#buildingGrad)" />
            <rect x="600" y="52" width="55"  height="68" fill="url(#buildingGrad)" />
            <rect x="650" y="62" width="45"  height="58" fill="url(#buildingGrad)" />
            <rect x="690" y="42" width="70"  height="78" fill="url(#buildingGrad)" />
            <rect x="755" y="65" width="40"  height="55" fill="url(#buildingGrad)" />
            <rect x="790" y="50" width="55"  height="70" fill="url(#buildingGrad)" />
            <rect x="840" y="35" width="75"  height="85" fill="url(#buildingGrad)" />
            <rect x="910" y="60" width="45"  height="60" fill="url(#buildingGrad)" />
            <rect x="950" y="48" width="60"  height="72" fill="url(#buildingGrad)" />
            <rect x="1005" y="70" width="38" height="50" fill="url(#buildingGrad)" />
            <rect x="1038" y="52" width="52" height="68" fill="url(#buildingGrad)" />
            <rect x="1085" y="38" width="68" height="82" fill="url(#buildingGrad)" />
            <rect x="1148" y="62" width="42" height="58" fill="url(#buildingGrad)" />
            <rect x="1185" y="48" width="58" height="72" fill="url(#buildingGrad)" />
            <rect x="1238" y="55" width="50" height="65" fill="url(#buildingGrad)" />
            <rect x="1283" y="42" width="65" height="78" fill="url(#buildingGrad)" />
            <rect x="1343" y="68" width="40" height="52" fill="url(#buildingGrad)" />
            <rect x="1378" y="58" width="62" height="62" fill="url(#buildingGrad)" />

            {/* Antennas */}
            <line x1="152"  y1="60" x2="152"  y2="35" stroke="#1a4a40" strokeWidth="1.5" />
            <circle cx="152" cy="34" r="2" fill="#009978" opacity="0.7" />

            <line x1="222"  y1="55" x2="222"  y2="25" stroke="#1a4a40" strokeWidth="1.5" />
            <line x1="216"  y1="32" x2="228"  y2="32" stroke="#1a4a40" strokeWidth="1.2" />
            <circle cx="222" cy="24" r="2" fill="#009978" opacity="0.7" />

            <line x1="310"  y1="50" x2="310"  y2="18" stroke="#1a4a40" strokeWidth="1.5" />
            <circle cx="310" cy="17" r="2.5" fill="#5aa3f1" opacity="0.8" />

            <line x1="395"  y1="45" x2="395"  y2="15" stroke="#1a4a40" strokeWidth="1.5" />
            <line x1="388"  y1="22" x2="402"  y2="22" stroke="#1a4a40" strokeWidth="1.2" />
            <line x1="385"  y1="28" x2="405"  y2="28" stroke="#1a4a40" strokeWidth="1.2" />
            <circle cx="395" cy="14" r="2" fill="#009978" opacity="0.7" />

            <line x1="540"  y1="40" x2="540"  y2="10" stroke="#1a4a40" strokeWidth="1.5" />
            <circle cx="540" cy="9"  r="2.5" fill="#5aa3f1" opacity="0.8" />

            <line x1="725"  y1="42" x2="725"  y2="12" stroke="#1a4a40" strokeWidth="1.5" />
            <line x1="718"  y1="20" x2="732"  y2="20" stroke="#1a4a40" strokeWidth="1.2" />
            <circle cx="725" cy="11" r="2" fill="#009978" opacity="0.7" />

            <line x1="875"  y1="35" x2="875"  y2="5"  stroke="#1a4a40" strokeWidth="1.5" />
            <line x1="868"  y1="12" x2="882"  y2="12" stroke="#1a4a40" strokeWidth="1.2" />
            <line x1="865"  y1="18" x2="885"  y2="18" stroke="#1a4a40" strokeWidth="1.2" />
            <circle cx="875" cy="4"  r="2.5" fill="#5aa3f1" opacity="0.8" />

            <line x1="1118" y1="38" x2="1118" y2="8"  stroke="#1a4a40" strokeWidth="1.5" />
            <circle cx="1118" cy="7" r="2.5" fill="#5aa3f1" opacity="0.8" />

            <line x1="1313" y1="42" x2="1313" y2="12" stroke="#1a4a40" strokeWidth="1.5" />
            <line x1="1306" y1="20" x2="1320" y2="20" stroke="#1a4a40" strokeWidth="1.2" />
            <circle cx="1313" cy="11" r="2" fill="#009978" opacity="0.7" />

            {/* Windows — tiny glowing dots */}
            <rect x="137" y="67" width="3" height="3" fill="#5aa3f1" opacity="0.4" />
            <rect x="143" y="67" width="3" height="3" fill="#5aa3f1" opacity="0.3" />
            <rect x="137" y="74" width="3" height="3" fill="#5aa3f1" opacity="0.25" />

            <rect x="205" y="60" width="3" height="3" fill="#5aa3f1" opacity="0.35" />
            <rect x="212" y="60" width="3" height="3" fill="#5aa3f1" opacity="0.4" />
            <rect x="219" y="67" width="3" height="3" fill="#5aa3f1" opacity="0.3" />

            <rect x="295" y="55" width="3" height="3" fill="#5aa3f1" opacity="0.4" />
            <rect x="302" y="55" width="3" height="3" fill="#5aa3f1" opacity="0.3" />
            <rect x="309" y="62" width="3" height="3" fill="#5aa3f1" opacity="0.4" />

            <rect x="380" y="50" width="3" height="3" fill="#5aa3f1" opacity="0.35" />
            <rect x="388" y="50" width="3" height="3" fill="#5aa3f1" opacity="0.4" />
            <rect x="396" y="57" width="3" height="3" fill="#5aa3f1" opacity="0.3" />

            <rect x="520" y="45" width="3" height="3" fill="#5aa3f1" opacity="0.4" />
            <rect x="528" y="45" width="3" height="3" fill="#5aa3f1" opacity="0.35" />
            <rect x="536" y="52" width="3" height="3" fill="#5aa3f1" opacity="0.4" />

            <rect x="860" y="40" width="3" height="3" fill="#5aa3f1" opacity="0.4" />
            <rect x="868" y="40" width="3" height="3" fill="#5aa3f1" opacity="0.35" />
            <rect x="876" y="47" width="3" height="3" fill="#5aa3f1" opacity="0.3" />
            <rect x="860" y="54" width="3" height="3" fill="#5aa3f1" opacity="0.25" />

            {/* Ground fill */}
            <rect x="0" y="115" width="1440" height="5" fill="#071a17" />
        </svg>
    </Box>
);

const Footer: React.FC = () => {
    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Cityscape />
            <Box sx={{ py: 3, display: 'flex', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#071a17' }}>
                <Typography sx={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                    © {new Date().getFullYear()}, Created with React.js, TypeScript & MUI with ♥
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
