import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const projects = [
    {
        title: "Portfolio v1",
        type: "WEBSITE",
        description: "First iteration of personal portfolio built to showcase projects and skills with smooth animations and responsive layout.",
        stack: ["React.js", "MUI", "LocalStorage", "CSS"],
        icon: "✦",
        notAvailable: false,
    },
    {
        title: "coming soon",
        type: "DASHBOARD",
        description: "A personal productivity dashboard with drag-and-drop task management, priority sorting, and progress tracking.",
        stack: ["React.js", "MUI", "LocalStorage"],
        icon: "◎",
        notAvailable: true,
    }
];

const ComingSoonCard: React.FC<typeof projects[0]> = ({ icon }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                flex: { xs: '1 1 100%', sm: '1 1 260px' },
                maxWidth: { xs: '100%', sm: 300 },
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.01)',
                backdropFilter: 'blur(6px)',
                cursor: 'default',
            }}
        >
            {/* Type badge
            <Box sx={{ position: 'absolute', top: 14, right: 14 }}>
                <Box sx={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', px: 1.5, py: 0.3 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>{type}</Typography>
                </Box>
            </Box> */}

            {/* Icon area with blur overlay */}
            <Box sx={{ position: 'relative', height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.1)', fontSize: '2.5rem', filter: 'blur(2px)', opacity: 0.3 }}>
                {icon}
            </Box>

            {/* Coming soon overlay */}
            <Box sx={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
            }}>
                <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>
                    coming soon
                </Typography>
                <Box sx={{ width: 24, height: '1px', background: 'rgba(0,153,120,0.4)' }} />
            </Box>

            {/* Placeholder content */}
            <Box sx={{ p: 3 }}>
                <Box sx={{ height: 16, borderRadius: '4px', background: 'rgba(255,255,255,0.05)', mb: 1.5, width: '55%' }} />
                <Box sx={{ height: 10, borderRadius: '4px', background: 'rgba(255,255,255,0.04)', mb: 0.8, width: '100%' }} />
                <Box sx={{ height: 10, borderRadius: '4px', background: 'rgba(255,255,255,0.04)', mb: 0.8, width: '80%' }} />
                <Box sx={{ height: 10, borderRadius: '4px', background: 'rgba(255,255,255,0.04)', mb: 2, width: '60%' }} />
                <Box sx={{ display: 'flex', gap: 0.8 }}>
                    {[40, 50, 45].map((w, i) => (
                        <Box key={i} sx={{ height: 22, width: w, borderRadius: '999px', background: 'rgba(255,255,255,0.04)' }} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

const ProjectCard: React.FC<typeof projects[0]> = ({ title, type, description, stack, icon }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                position: 'relative',
                flex: { xs: '1 1 100%', sm: '1 1 260px' },
                maxWidth: { xs: '100%', sm: 300 },
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(6px)',
                cursor: 'pointer',
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
            {/* Type badge */}
            <Box sx={{ position: 'absolute', top: 14, right: 14 }}>
                <Box sx={{ border: '1px solid #009978', borderRadius: '999px', px: 1.5, py: 0.3 }}>
                    <Typography sx={{ fontSize: '0.65rem', color: '#009978', letterSpacing: '0.1em' }}>{type}</Typography>
                </Box>
            </Box>

            {/* Icon area */}
            <Box sx={{ height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.15)', fontSize: '2.5rem' }}>
                {icon}
            </Box>

            {/* Content */}
            <Box sx={{ p: 3 }}>
                <Typography sx={{ fontFamily: 'serif', fontSize: '1.1rem', fontWeight: 700, color: 'white', textTransform: 'capitalize', mb: 1 }}>
                    {title}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, mb: 2, textAlign: 'left' }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                    {stack.map((tech) => (
                        <Box key={tech} sx={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', px: 1.2, py: 0.3 }}>
                            <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>{tech}</Typography>
                        </Box>
                    ))}
                </Box>
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
                {projects.map((project) =>
                    project.notAvailable
                        ? <ComingSoonCard key={project.title} {...project} />
                        : <ProjectCard key={project.title} {...project} />
                )}
            </Box>
        </Box>
    );
};

export default Projects;
