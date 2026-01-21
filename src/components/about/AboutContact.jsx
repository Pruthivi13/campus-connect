import React, { useState } from 'react';
import '../../styles/about/about.css';

export default function AboutContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '2f9ae985-ee43-442f-9285-e3acacd2ffaa',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    from_name: 'Campus Connect',
                    subject: `New Contact Form Submission from ${formData.name}`
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="about-contact">
            <h2 className="about-contact-title">Contact Us</h2>
            <div className="about-contact-container">
                <div className="about-contact-left">
                    <div className="about-contact-illustration">
                        <img
                            src="/about-assets/human-support.svg"
                            alt="Customer Support"
                            className="about-support-image"
                        />
                    </div>
                    <div className="about-contact-text">
                        <p>Request changes,</p>
                        <p>suggest additions,</p>
                        <p>or get help with</p>
                        <p>the portal.</p>
                    </div>
                </div>

                <div className="about-contact-right">
                    <form className="about-contact-form" onSubmit={handleSubmit}>
                        <div className="about-form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="about-form-input"
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="about-form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your.email@campus.edu"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="about-form-input"
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="about-form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Describe your request or suggestion..."
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="about-form-textarea"
                                disabled={status === 'sending'}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="about-submit-btn"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : 
                             status === 'success' ? '✓ Message Sent!' : 
                             status === 'error' ? 'Failed - Try Again' : 
                             'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="about-contact-methods">
                <div className="about-method-card">
                    <div className="about-method-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <path d="M3 7l9 6 9-6" />
                        </svg>
                    </div>
                    <h4>Email</h4>
                    <p>campusconnectforstudents@gmail.com</p>
                </div>
                <div className="about-method-card">
                    <div className="about-method-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M9 3v18M3 9h18" />
                        </svg>
                    </div>
                    <h4>Response Time</h4>
                    <p>Within 24 hours</p>
                </div>
                <div className="about-method-card">
                    <div className="about-method-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>
                    <h4>Support</h4>
                    <p>24/7 Available</p>
                </div>
            </div>
        </section>
    );
}

