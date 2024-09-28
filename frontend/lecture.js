import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/styles/lecture.css';
import '../assets/styles/quiz.css';

const LecturePage = () => {
    return (
        <div className="container">
            <Navbar />
    
            <main className="course-container">
                <div className="course-content" style={{height: '80vh'}}>
                    <div className="video-container">
                        <iframe id="lecture-video" 
                                width="100%" 
                                height="315" 
                                src="https://www.youtube.com/embed/eIrMbAQSU34" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                        </iframe>
                    </div>
                    <div className="course-info">
                        <h1>Java Programming: Master the Fundamentals!</h1>
                        <p>Learn Java programming from scratch with hands-on exercises and projects — perfect for beginners and intermediate programmers!</p>
                        <div className="course-meta">
                            <span className="rating">4.7 ★</span>
                            <span className="students">850,123 students</span>
                            <span className="duration">12 hours total</span>
                        </div>
                        <p className="last-updated">Last updated May 2024</p>
                        <p className="languages">English <span className="auto-generated">English [Auto], Spanish [Auto], 15 more</span></p>
                    </div>
                </div>
                <button id="toggle-content" className="toggle-content-btn">Course content</button>
            </main>
    
            <aside id="course-sidebar" className="course-sidebar">
                <div className="sidebar-header">
                    <h2>Course content</h2>
                    <button id="close-sidebar" className="close-btn">&times;</button>
                </div>
                <div className="course-sections">
                    <div className="section">
                        <h3>Section 1: Introduction to Java <span>0/5 | 30min</span></h3>
                        <ul>
                            <li><input type="checkbox" /><span className="lesson-title">1. What is Java?</span><span className="lesson-duration">5min</span></li>
                            <li><input type="checkbox" /><span className="lesson-title">2. Setting up Java Development Environment</span><span className="lesson-duration">10min</span></li>
                            <li><input type="checkbox" /><span className="lesson-title">3. Your First Java Program</span><span className="lesson-duration">5min</span></li>
                            <li><input type="checkbox" /><span className="lesson-title">4. Understanding Java Syntax</span><span className="lesson-duration">5min</span></li>
                            <li><input type="checkbox" /><span className="lesson-title">5. Java Variables and Data Types</span><span className="lesson-duration">5min</span></li>
                        </ul>
                    </div>
                    {/* Add other sections similarly */}
                </div>
                <div className="quiz-section">
                    <button id="take-quiz-btn" className="take-quiz-btn">Take Java Quiz</button>
                    <div id="quiz-score-display" className="quiz-score-display" style={{display: 'none'}}>
                        <p>Your last score: <span id="sidebar-quiz-score"></span></p>
                    </div>
                </div>
            </aside>

            <div id="quiz-modal" className="quiz-modal">
                <div className="quiz-content">
                    <h2>Java Course Quiz</h2>
                    <div id="quiz-questions"></div>
                    <div id="quiz-results" style={{display: 'none'}}>
                        <h3>Quiz Results</h3>
                        <p>Your score: <span id="quiz-score"></span></p>
                        <div id="question-feedback"></div>
                    </div>
                    <button id="submit-quiz" className="submit-quiz-btn">Submit Quiz</button>
                    <button id="close-quiz" className="close-quiz-btn">&times;</button>
                </div>
            </div>
        </div>
    );
};

export default LecturePage;