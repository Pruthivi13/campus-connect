import React from 'react';
import '../../styles/about/about.css';

export default function AboutTechStack() {
    return (
        <section className="about-tech-stack">
            <div className="about-tech-container">
                <img
                    src="/about-assets/tech.svg"
                    alt="Campus Connect Tech Stack"
                    className="about-tech-image"
                />
            </div>
        </section>
    );
}
