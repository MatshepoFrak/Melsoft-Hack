import React from 'react';
import '../assets/categories.css';
import '../assets/styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faCloud, faShieldAlt, faRobot, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PopularJobCategories = () => {
    return (
        <div className="container">
            <header>
                <div className="logo">Logo Here</div>
                <nav>
                    <ul>
                        <li>Membership</li>
                        <li>Community</li>
                        <li>Feature</li>
                        <li>Help</li>
                        <li>About</li>
                    </ul>
                </nav>
                <a href="#" className="login-btn">Logout</a>
            </header>
        
            <section className="journey-section">
                <h2>Popular <span className="underline">Job</span> Categories</h2>
                
                <div className="card-container">
                    <div className="card large-card">
                        <FontAwesomeIcon icon={faCode} />
                        <h3>Software Development</h3>
                        <p>Build cutting-edge applications and systems. Our platform connects you with top tech companies seeking skilled developers.</p>
                        <span className="job-count">120 Jobs Available</span>
                        <div className="logo-container">
                            <img src="../assets/images/google.png" alt="Google" className="company-logo" />
                            <img src="../assets/images/Java.png" alt="Java" className="company-logo" />
                            <img src="../assets/images/ms.png" alt="Microsoft" className="company-logo" />
                        </div>
                        <span className="job-type">Full Stack Developer</span>
                        <button className="arrow-btn"><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                    <div className="small-cards-container">
                        <div className="card small-card">
                            <FontAwesomeIcon icon={faDatabase} />
                            <h3>Data Science & Analytics</h3>
                            <p>Unlock insights from big data and drive business decisions.</p>
                            <span className="job-count">85 Jobs Available</span>
                            <button className="arrow-btn"><FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                        <div className="card small-card">
                            <FontAwesomeIcon icon={faCloud} />
                            <h3>Cloud Computing</h3>
                            <p>Design and manage scalable cloud infrastructure solutions.</p>
                            <span className="job-count">72 Jobs Available</span>
                            <button className="arrow-btn"><FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                        <div className="card small-card">
                            <FontAwesomeIcon icon={faShieldAlt} />
                            <h3>Cybersecurity</h3>
                            <p>Protect digital assets and secure networks from threats.</p>
                            <span className="job-count">63 Jobs Available</span>
                            <button className="arrow-btn"><FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                        <div className="card small-card">
                            <FontAwesomeIcon icon={faRobot} />
                            <h3>Artificial Intelligence</h3>
                            <p>Develop AI and machine learning solutions for various industries.</p>
                            <span className="job-count">58 Jobs Available</span>
                            <button className="arrow-btn"><FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PopularJobCategories;