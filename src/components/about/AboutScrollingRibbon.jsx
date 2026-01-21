import React from 'react';
import '../../styles/about/about.css';

export default function AboutScrollingRibbon() {
    return (
        <section className="about-scrolling-ribbon">
            <div className="about-ribbon-wrapper">
                {/* First ribbon */}
                <div className="about-ribbon-track ribbon-top">
                    <div className="about-ribbon-content">
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                    </div>
                    <div className="about-ribbon-content" aria-hidden="true">
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                    </div>
                </div>

                {/* Second ribbon */}
                <div className="about-ribbon-track ribbon-bottom">
                    <div className="about-ribbon-content">
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                    </div>
                    <div className="about-ribbon-content" aria-hidden="true">
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                        <span>CAMPUS <span className="ribbon-highlight">CONNECT</span> • </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
