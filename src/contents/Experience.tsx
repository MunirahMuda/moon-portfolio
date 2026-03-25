import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const experiences = [
    {
        company: "Springtech Ventures",
        type: "SDN. BHD · Malaysia",
        period: "May 2024 – Present",
        role: "Research & Development Engineer",
        subtitle: "Frontend UI/UX Specialist",
        points: [
            "Led frontend UI/UX development for Cipher Scanning Center and Cipher Cloud, an AI-powered document extraction platform.",
            "Designed and implemented responsive, user-friendly interfaces using React.js, TypeScript, and MUI.",
            "Developed interactive dashboards and components based on Figma prototypes.",
            "Integrated React Router for seamless page navigation and dynamic content updates.",
            "Optimised UI performance by improving state management and implementing best practices.",
            "Collaborated with backend developers and designers to enhance product usability.",
        ],
    },
];

const Experience: React.FC = () => {
    const [selected, setSelected] = useState(0);
    const exp = experiences[selected];

    return (
        <Box id="experience" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', px: 4, py: 6 }}>
            {/* Section Title */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 11, width: '100%', maxWidth: 1000 }}>
                <Box sx={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <Typography sx={{ fontFamily: 'serif', fontSize: '0.85rem', letterSpacing: '0.2em', color: 'white', textTransform: 'uppercase' }}>
                    Experience
                </Typography>
                <Box sx={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            </Box>

            {/* Card */}
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: 1000,
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(6px)',
                    mb: 11,
                }}
            >
                {/* Left Panel — Company List */}
                <Box
                    sx={{
                        width: 200,
                        minWidth: 200,
                        borderRight: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: 3,
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {experiences.map((e, i) => (
                            <Box
                                key={i}
                                onClick={() => setSelected(i)}
                                sx={{
                                    cursor: 'pointer',
                                    pb: 1.5,
                                    borderBottom: selected === i ? '1px solid #009978' : '1px solid transparent',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: 'serif',
                                        fontSize: '1rem',
                                        fontWeight:"bold",
                                        color: selected === i ? '#009978' : 'white',
                                        textTransform: 'uppercase',
                                        lineHeight: 1.3,
                                        transition: 'color 0.2s',
                                    }}
                                >
                                    {e.company}
                                </Typography>
                                <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', mt: 1.5 }}>
                                    {e.period}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Bottom tag */}
                    <Typography sx={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', mt: 4 }}>
                        {exp.type}
                    </Typography>
                </Box>

                {/* Right Panel — Details */}
                <Box sx={{ flex: 1, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography sx={{ fontFamily: 'serif', fontSize: '1.4rem', fontWeight: 700, color: 'white', mb: 0.5, textAlign: 'left' }}>
                        {exp.role}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', mb: 3, textAlign: 'left' }}>
                        {exp.subtitle}
                    </Typography>

                    <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5, width: '100%' }}>
                        {exp.points.map((point, i) => (
                            <Box component="li" key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                <Typography sx={{ color: '#5aa3f1', fontSize: '1rem', lineHeight: 1.6, flexShrink: 0 }}>+</Typography>
                                <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, textAlign: 'left' }}>
                                    {point}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Experience;
