import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const skillCategories = [
    {
        category: "Frontend",
        type: "UI / UX",
        description: "Building responsive, accessible, and visually polished user interfaces.",
        skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML & CSS", "MUI", "React Native", "Expo"],
        icon: "◈",
    },
    {
        category: "State & Design",
        type: "ARCHITECTURE",
        description: "Managing application state and translating wireframes into pixel-perfect components.",
        skills: ["useState", "useEffect", "useCallback", "Context API", "Figma", "Component Architecture", "Responsive Design", "WCAG Accessibility", "Data Visualization"],
        icon: "✦",
    },
    {
        category: "Backend",
        type: "SERVER",
        description: "Building APIs and handling server-side logic for full-stack applications.",
        skills: ["Node.js", "Express.js", "RESTful APIs", "JSON", "MongoDB", "MongoDB Atlas"],
        icon: "◎",
    },
    {
        category: "DevOps",
        type: "DEPLOYMENT",
        description: "Maintaining clean codebases and shipping to production reliably.",
        skills: ["Git", "GitHub Actions", "GitLab", "Docker", "CI/CD Pipelines", "SFTP", "SSH", "Remote Deployment"],
        icon: "🌙",
    },
];

const SkillCard: React.FC<typeof skillCategories[0]> = ({ category, type, description, skills, icon }) => {
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
                cursor: 'default',
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

            <Box sx={{ height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.15)', fontSize: '2.5rem' }}>
                {icon}
            </Box>

            <Box sx={{ p: 3 }}>
                <Typography sx={{ fontFamily: 'serif', fontSize: '1.1rem', fontWeight: 700, color: 'white', mb: 1 }}>
                    {category}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, mb: 2, textAlign: 'left' }}>
                    {description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                    {skills.map((skill) => (
                        <Box key={skill} sx={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', px: 1.2, py: 0.3 }}>
                            <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>{skill}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

const Skills: React.FC = () => {
    return (
        <Box id="skills" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', px: { xs: 2, md: 4 }, py: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 6, width: '100%', maxWidth: 1000 }}>
                <Box sx={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <Typography sx={{ fontFamily: 'serif', fontSize: '0.85rem', letterSpacing: '0.2em', color: 'white', textTransform: 'uppercase' }}>
                    Skills
                </Typography>
                <Box sx={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', width: '100%', maxWidth: 1000, mb: 6 }}>
                {skillCategories.map((cat) => (
                    <SkillCard key={cat.category} {...cat} />
                ))}
            </Box>
        </Box>
    );
};

export default Skills;
