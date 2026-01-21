import React from 'react';
import '../../styles/about/about.css';

export default function AboutFeatures() {
    const features = [
        {
            id: 1,
            title: 'Notice Board',
            description: 'Get latest notification and updates about college',
            icon: '/about-assets/icon1.svg'
        },
        {
            id: 2,
            title: 'Academic Resources',
            description: 'Get verified notes, assignments & PDFs that makes learning easier',
            icon: '/about-assets/icon2.svg'
        },
        {
            id: 3,
            title: 'Smart Search',
            description: 'Search for all your resources, queries and updates here',
            icon: '/about-assets/icon3.svg'
        },
        {
            id: 4,
            title: 'Light & Dark Mode',
            description: 'Switch from light to dark in one click to boost your experience',
            icon: '/about-assets/icon4.svg'
        },
        {
            id: 5,
            title: 'College Timings',
            description: 'Track the open/close status of college and timings',
            icon: '/about-assets/icon5.svg'
        }
    ];

    return (
        <section className="about-features">
            <div className="about-features-grid">
                {features.map((feature) => (
                    <div key={feature.id} className="about-feature-card">
                        <div className="about-card-inner">
                            <img src={feature.icon} alt={feature.title} className="about-card-icon" />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
