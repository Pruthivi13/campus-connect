import React from 'react';
import '../../styles/about/about.css';

export default function AboutTeam() {
    const teamMembers = [
        {
            id: 1,
            name: 'Sumaiya Kalim',
            role: 'Developer 1 focuses on UI/UX design, prioritizing a balanced visual user experience.',
            image: '/about-assets/team1.png',
            github: 'https://github.com/Hiromitachi',
            linkedin: 'https://www.linkedin.com/in/sumaiya-kalim-7ab784268/',
            email: 'sumaiyakalim18@gmail.com',
            greeting: 'Hey this is Sumaiya!',
            skills: 'UI/UX Design, Front-end Development',
            personality: 'I like organised stuff & campus connect is the best organised notes app.',
            isLeader: false,
            emoji: '❤️'
        },
        {
            id: 2,
            name: 'Pruthiviraj Sahu',
            role: 'Developer 2 focuses on creating strong base & user focused system experience.',
            image: '/about-assets/team2.jpeg',
            github: 'https://github.com/Pruthivi13',
            linkedin: 'https://www.linkedin.com/in/pruthiviraj-sahu/',
            email: 'mail.to.pruthivi@gmail.com',
            greeting: 'Hey this is Pruthiviraj!',
            skills: 'System Architecture, User Experience',
            personality: 'I believe in building strong foundations that scale beautifully.',
            isLeader: false,
            emoji: '⚡'
        },
        {
            id: 3,
            name: 'Biswarupa Sahu',
            role: 'Developer 3 focuses on setting up panels & researching resources for the project.',
            image: '/about-assets/team3.jpeg',
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            greeting: 'Hey this is Biswarupa!',
            skills: 'Research, Resource Management',
            personality: 'I love exploring new technologies and finding the best tools for our team.',
            isLeader: false,
            emoji: '💻'
        }
    ];

    return (
        <section className="about-team">
            <div className="about-team-header">
                <img src="/about-assets/team-heading.svg" alt="Meet our team" className="about-team-header-img" />
            </div>
            <div className="about-team-grid">
                {teamMembers.map((member) => (
                    <div key={member.id} className="about-team-card-wrapper">
                        <div className="about-team-card">
                            <img src={member.image} alt={member.name} className="about-card-img" />
                            <div className="about-overlay"></div>
                            <div className="about-content">
                                <h3>{member.name}</h3>

                                <div className="about-actions">
                                    <a href={`mailto:${member.email}`} className="about-connect-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Get in Touch</a>

                                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="about-icon-box">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="about-icon-box">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.382c.43-.664 1.195-1.61 2.91-1.61 2.126 0 3.719 1.395 3.719 4.391v5.589zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.957-1.71 1.187 0 1.915.754 1.948 1.71 0 .951-.761 1.71-1.99 1.71zm1.959 11.597H3.379V9.557h3.917v10.895zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="about-hover-overlay">
                                <div className="about-emoji-icon">
                                    {member.emoji}
                                </div>
                                <div className="about-hover-content">
                                    <h4>{member.greeting}</h4>
                                    <p className="about-hover-role">{member.role}</p>
                                    <p className="about-hover-skills">Skill set: {member.skills}</p>
                                </div>
                            </div>

                            {/* Leader Badge */}
                            {member.isLeader && (
                                <div className="about-leader-badge">
                                    ⭐ I'm the leader of this team
                                </div>
                            )}

                            {/* Personality Bubble */}
                            <div className="about-personality-bubble">
                                {member.personality}
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </section>
    );
}
