import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

const contacts = [
    {
        label: "Email",
        value: "munirahmuda22@gmail.com",
        href: "mailto:munirahmuda22@gmail.com",
        icon: "✉",
    },
    {
        label: "GitHub",
        value: "MunirahYoung",
        href: "https://github.com/MunirahMuda",
        icon: "◈",
    },
    {
        label: "LinkedIn",
        value: "Coming soon",
        href: null,
        icon: "✦",
    },
];

const ContactChip: React.FC<typeof contacts[0]> = ({ label, value, href, icon }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Box
            component={href ? 'a' : 'div'}
            href={href ?? undefined}
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                px: 3,
                py: 2,
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(6px)',
                textDecoration: 'none',
                cursor: href ? 'pointer' : 'default',
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                boxShadow: hovered && href
                    ? '0 16px 40px rgba(0,153,120,0.3), 0 4px 12px rgba(0,0,0,0.4)'
                    : '0 0px 0px transparent',
                transform: hovered && href ? 'translateY(-3px)' : 'translateY(0)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(to right, #009978, #5aa3f1)',
                    opacity: hovered && href ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                },
            }}
        >
            <Typography sx={{ fontSize: '1.2rem', color: '#009978' }}>{icon}</Typography>
            <Box>
                <Typography sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {label}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', color: href ? 'white' : 'rgba(255,255,255,0.3)', fontStyle: href ? 'normal' : 'italic' }}>
                    {value}
                </Typography>
            </Box>
        </Box>
    );
};

const Contacts: React.FC = () => {
    return (
        <Box id="contact" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', px: 4, py: 6 }}>
            {/* Section Title */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 6, width: '100%', maxWidth: 1000 }}>
                <Box sx={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <Typography sx={{ fontFamily: 'serif', fontSize: '0.85rem', letterSpacing: '0.2em', color: 'white', textTransform: 'uppercase' }}>
                    Contact
                </Typography>
                <Box sx={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            </Box>

            {/* Tagline */}
            <Typography sx={{ fontFamily: 'serif', fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', mb: 5, textAlign: 'center' }}>
                Feel free to reach out. I'd love to connect. Or maybe sharing a cup of cuppa
            </Typography>

            {/* Contact Cards */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5, justifyContent: 'center', width: '100%', maxWidth: 1000, mb: 11 }}>
                {contacts.map((c) => (
                    <ContactChip key={c.label} {...c} />
                ))}
            </Box>
        </Box>
    );
};

export default Contacts;
