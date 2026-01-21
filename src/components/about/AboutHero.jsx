import React from 'react';
import '../../styles/about/about.css';

export default function AboutHero() {
    return (
        <section className="about-hero">
            <div className="about-hero-content">
                <h1 className="about-hero-title">
                    Campus<span className="highlight">Connect</span>
                </h1>
                <p className="about-hero-subtitle">The Best Campus Resource Finder</p>
                <p className="about-hero-description">Making campus information accessible, organized, and effortless</p>
            </div>
            <div className="about-hero-image">
                <img src="/about-assets/book-illustration.svg" alt="Campus Connect Book" className="about-book-img" />
            </div>
        </section>
    );
}
