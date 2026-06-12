import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const experiences = [
    {
        company: "Springtech Ventures",
        type: "SDN. BHD · Malaysia",
        period: "Feb 2025 – Present",
        role: "Frontend Engineer",
        subtitle: "Tech & Project Lead",
        points: [
            "Architected and developed frontend interfaces for multiple products including Cipher SC, Cipher Cloud, UTeM Fire Alarm Monitoring System, and ShipSecure — a real-time CCTV monitoring platform for oil tanker vessels, using React.js, TypeScript, and MUI.",
            "Built Fortress Kiosk (vehicle registration system for mining site entry/exit) and Fortress Dashboard (HQ data monitoring) as sole frontend developer; collaborated with backend team to define API requirements, data structures, and system flow.",
            "Engineered a custom image viewer component with zoom in/out and drag-to-pan using MUI Dialog, built entirely without third-party libraries.",
            "Currently leading frontend and backend technical planning for Cipher Studio — full-scale revamp of Cipher SC — by defining architecture decisions, feature roadmap, and product direction.",
            "Managed 3 interns on the ECM project (Nov 2025 – May 2026) across React, TypeScript, MUI, MongoDB, Python, Webhooks, and ElasticSearch; oversaw sprint planning, developer logs, and technical mentorship.",
        ],
    },
    {
        company: "LeadAlways",
        type: "(M) TECHNOLOGY SDN. BHD · Full-time",
        period: "May 2024 – Feb 2025",
        role: "Frontend Engineer",
        subtitle: "Cipher SC · Full-time",
        points: [
            "Continued as sole frontend developer on Cipher SC following internship conversion, building scalable component-based interfaces using React.js, TypeScript, and MUI from architecture through to production.",
            "Independently implemented a notification system flow with no prior experience by researching, designing, and delivering the feature end-to-end.",
            "Identified and resolved persistent request timeout issues by architecting a block-based data fetching solution using startIndex and size parameters — improving reliability of data-heavy GET requests.",
            "Built a custom data quality control workflow for enterprise clients including MultiWeb, Canon, and EcoWorld, handling thousands of scanned documents in a live production environment.",
            "Continued development of Carsem Dashboard (real-time factory monitoring, 15+ panels, up to 60 sensors) — built a touch and mouse gesture-driven resizable graph, added data table with PDF export, migrated Tailwind CSS to MUI, and handled remote deployment to client machines.",
            "Led frontend planning and architecture scoping for Cipher Cloud prior to transitioning to Springtech Ventures.",
        ],
    },
    {
        company: "LeadAlways",
        type: "(M) TECHNOLOGY SDN. BHD · Internship",
        period: "Oct 2023 – Mar 2024",
        role: "Frontend UI/UX Intern",
        subtitle: "Cipher SC · Converted to Full-time",
        points: [
            "Sole frontend developer on Cipher SC from initial build; shipped the first production-ready version within 3 months alongside 2 backend developers and a PM.",
            "Established the component architecture that carried through all subsequent development.",
            "Converted to full-time following internship based on performance and impact.",
        ],
    },
];

const Experience: React.FC = () => {
    const [selected, setSelected] = useState(0);
    const exp = experiences[selected];

    return (
        <Box id="experience" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', px: { xs: 2, md: 4 }, py: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 6, width: '100%', maxWidth: 1000 }}>
                <Box sx={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <Typography sx={{ fontFamily: 'serif', fontSize: '0.85rem', letterSpacing: '0.2em', color: 'white', textTransform: 'uppercase' }}>
                    Experience
                </Typography>
                <Box sx={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                width: '100%',
                maxWidth: 1000,
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(6px)',
                mb: 6,
            }}>
                {/* Left Panel */}
                <Box sx={{
                    width: { xs: '100%', md: 200 },
                    minWidth: { xs: 'unset', md: 200 },
                    borderRight: { xs: 'none', md: '1px solid rgba(255,255,255,0.1)' },
                    borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', md: 'none' },
                    display: 'flex',
                    flexDirection: { xs: 'row', md: 'column' },
                    justifyContent: { xs: 'flex-start', md: 'space-between' },
                    overflowX: { xs: 'auto', md: 'visible' },
                    gap: { xs: 0, md: 0 },
                    p: { xs: 2, md: 3 },
                }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: { xs: 0, md: 2 }, flexShrink: 0 }}>
                        {experiences.map((e, i) => (
                            <Box
                                key={i}
                                onClick={() => setSelected(i)}
                                sx={{
                                    cursor: 'pointer',
                                    px: { xs: 2, md: 0 },
                                    py: { xs: 1.5, md: 0 },
                                    pb: { xs: 1.5, md: 1.5 },
                                    borderBottom: { xs: selected === i ? '2px solid #009978' : '2px solid transparent', md: selected === i ? '1px solid #009978' : '1px solid transparent' },
                                    whiteSpace: { xs: 'nowrap', md: 'normal' },
                                    flexShrink: 0,
                                }}
                            >
                                <Typography sx={{
                                    fontFamily: 'serif',
                                    fontSize: { xs: '0.8rem', md: '1rem' },
                                    fontWeight: 'bold',
                                    color: selected === i ? '#009978' : 'white',
                                    textTransform: 'uppercase',
                                    lineHeight: 1.3,
                                    transition: 'color 0.2s',
                                }}>
                                    {e.company}
                                </Typography>
                                <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', mt: 0.5, display: { xs: 'none', md: 'block' } }}>
                                    {e.subtitle}
                                </Typography>
                                <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', mt: 0.5 }}>
                                    {e.period}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    <Typography sx={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', mt: { xs: 0, md: 4 }, display: { xs: 'none', md: 'block' } }}>
                        {exp.type}
                    </Typography>
                </Box>

                {/* Right Panel */}
                <Box sx={{ flex: 1, p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography sx={{ fontFamily: 'serif', fontSize: { xs: '1.1rem', md: '1.4rem' }, fontWeight: 700, color: 'white', mb: 0.5, textAlign: 'left' }}>
                        {exp.role}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', mb: 3, textAlign: 'left' }}>
                        {exp.subtitle}
                    </Typography>

                    <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5, width: '100%' }}>
                        {exp.points.map((point, i) => (
                            <Box component="li" key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                                <Typography sx={{ color: '#5aa3f1', fontSize: '1rem', lineHeight: 1.6, flexShrink: 0 }}>+</Typography>
                                <Typography sx={{ fontSize: { xs: '0.82rem', md: '0.9rem' }, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, textAlign: 'left' }}>
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
