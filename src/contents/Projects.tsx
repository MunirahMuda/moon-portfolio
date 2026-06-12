import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

type Project = {
    title: string;
    type: string;
    description: string;
    stack: string[];
    icon: string;
    previewImage?: string;
    liveUrl?: string;
    githubUrl?: string;
    githubFrontendUrl?: string;
    githubBackendUrl?: string;
};

const projects: Project[] = [
    {
        title: "Moon Portfolio",
        type: "WEBSITE",
        description: "Personal portfolio designed and built from scratch. Features a canvas-based animated starfield, scroll-triggered reveal animations, orbital photo frame, procedurally generated cityscape, and a custom cursor — all without UI libraries.",
        stack: ["React.js", "TypeScript", "CSS Modules", "Vite", "Vercel"],
        icon: "✦",
        liveUrl: "https://moonportfolio-one.vercel.app",
        githubUrl: "https://github.com/MunirahMuda/moon-portfolio",
    },
    {
        title: "MoolahV2",
        type: "FULL-STACK APP",
        description: "Personal finance tracker replicating a real monthly budgeting workflow. Tracks savings, commitments, and loans with live Gold price and currency exchange rate APIs. Includes daily transaction history with PDF export and scheduled data updates via cron jobs.",
        stack: ["Vue.js", "TypeScript", "Node.js", "Express.js", "MongoDB Atlas", "REST APIs", "Vercel"],
        icon: "◎",
        liveUrl: "https://moolahv2-frontend.vercel.app/login",
        previewImage: `${import.meta.env.BASE_URL}moolah_guest_1.webp`,
        githubFrontendUrl: "https://github.com/MunirahMuda/Moolahv2-frontend",
        githubBackendUrl: "https://github.com/MunirahMuda/MoolahV2-backend",
    },
];

const ProjectCard: React.FC<Project> = ({ title, type, description, stack, icon, previewImage, liveUrl, githubUrl, githubFrontendUrl, githubBackendUrl }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                position: 'relative',
                flex: { xs: '1 1 100%', sm: '1 1 260px' },
                maxWidth: { xs: '100%', sm: 420 },
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(6px)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                boxShadow: hovered ? '0 16px 40px rgba(0,153,120,0.3), 0 4px 12px rgba(0,0,0,0.4)' : 'none',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '2px',
                    background: 'linear-gradient(to right, #009978, #5aa3f1)',
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                },
            }}
        >
            <Box sx={{ position: 'absolute', top: 14, right: 14 }}>
                <Box sx={{ border: '1px solid #009978', borderRadius: '999px', px: 1.5, py: 0.3 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#009978', letterSpacing: '0.1em' }}>{type}</Typography>
                </Box>
            </Box>

            <Box sx={{ height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.15)', fontSize: '2.5rem', overflow: 'hidden' }}>
                {previewImage
                    ? <Box component="img" src={previewImage} alt={title} sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    : icon}
            </Box>

            <Box sx={{ p: 3 }}>
                <Typography sx={{ fontFamily: 'serif', fontSize: '1.1rem', fontWeight: 700, color: 'white', textTransform: 'capitalize', mb: 1 }}>
                    {title}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, mb: 2, textAlign: 'left' }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: (liveUrl || githubUrl || githubFrontendUrl || githubBackendUrl) ? 2 : 0 }}>
                    {stack.map((tech) => (
                        <Box key={tech} sx={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', px: 1.2, py: 0.3 }}>
                            <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>{tech}</Typography>
                        </Box>
                    ))}
                </Box>
                {(liveUrl || githubUrl || githubFrontendUrl || githubBackendUrl) && (
                    <Box sx={{ display: 'flex', gap: 1.5, mt: 1, flexWrap: 'wrap' }}>
                        {liveUrl && (
                            <Box component="a" href={liveUrl} target="_blank" rel="noopener noreferrer"
                                sx={{ fontSize: '0.75rem', color: '#5aa3f1', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                Live ↗
                            </Box>
                        )}
                        {githubUrl && (
                            <Box component="a" href={githubUrl} target="_blank" rel="noopener noreferrer"
                                sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                                GitHub ↗
                            </Box>
                        )}
                        {githubFrontendUrl && (
                            <Box component="a" href={githubFrontendUrl} target="_blank" rel="noopener noreferrer"
                                sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                                Frontend Repo ↗
                            </Box>
                        )}
                        {githubBackendUrl && (
                            <Box component="a" href={githubBackendUrl} target="_blank" rel="noopener noreferrer"
                                sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                                Backend Repo ↗
                            </Box>
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    );
};

const Projects: React.FC = () => {
    return (
        <Box id="projects" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', px: { xs: 2, md: 4 }, py: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 6, width: '100%', maxWidth: 1000 }}>
                <Box sx={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <Typography sx={{ fontFamily: 'serif', fontSize: '0.85rem', letterSpacing: '0.2em', color: 'white', textTransform: 'uppercase' }}>
                    Projects
                </Typography>
                <Box sx={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', width: '100%', maxWidth: 1000, mb: 6 }}>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
