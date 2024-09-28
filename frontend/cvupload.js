import React from 'react';
import Navbar from './Navbar';
import '../assets/styles/styles.css';
import '../assets/styles/upload.css';

const CVUpload = () => {
    return (
        <div className="container">
            <Navbar />
            <section className="journey-section">
                <h2>Success <span className="underline">Starts</span><br /> Here</h2>
                
                <div className="card-container">
                    <div className="card">
                        <i className="far fa-file-alt"></i>
                        <h3>Upload CV</h3>
                        <p>Revamp your CV with our AI-powered tools. Stand out to potential employers and increase your chances of landing your dream job.</p>
                        <label htmlFor="cv-upload" className="power-btn">
                            <i className="fas fa-cloud-arrow-up" style={{fontSize: '25px', fontWeight: 'bold'}}></i>
                            <input type="file" id="cv-upload" accept=".pdf,.doc,.docx" style={{display: 'none'}} />
                        </label>
                    </div>
                    <div className="card">
                        <i className="far fa-envelope"></i>
                        <h3>Cover Letter Revamp</h3>
                        <p>Create compelling cover letters tailored to each job application. Our AI assists in highlighting your strengths and experiences.</p>
                        
                        <button className="power-btn">
                            <i className="fas fa-cloud-arrow-up" style={{fontSize: '25px', fontWeight: 'bold'}}></i>
                        </button>
                    </div>
                    <div className="card">
                        <i className="far fa-user"></i>
                        <h3>AI Interview Prep</h3>
                        <p>Practice one-on-one with our AI model for a realistic interview experience. Improve your responses and boost your confidence.</p>
                        <button className="power-btn" onClick={() => window.location.href='liveinterview.html'}>
                            <i className="fa-solid fa-power-off icon-small" style={{fontSize: '25px', fontWeight: 'bold'}}></i>
                        </button>
                    </div>
                    <div className="card">
                        <i className="far fa-check-circle"></i>
                        <h3>Skill Assessments</h3>
                        <p>Take industry-standard assessments to validate your skills. Showcase your expertise to potential employers with certified results.</p>
                        <button className="power-btn">
                            <i className="fa-solid fa-power-off icon-small" style={{fontSize: '25px', fontWeight: 'bold'}}></i>
                        </button>
                    </div>
                </div>
            </section>
            <div id="upload-modal" className="modal">
                <div className="modal-content">
                    <h2>Generating your Materials</h2>
                    <p>Our AI is getting your revamped CV ready for you... This could take a couple minutes</p>
                    <img src="../assets/images/analysing.gif" alt="Analyzing" className="analyzing-gif" />
                    <div className="progress-container">
                        <h3>Step 1: Transferring files to server</h3>
                        <div className="progress-bar" id="transfer-progress"></div>
                        <p className="progress-status" id="transfer-status">Uploading your files to our server, this varies based on your internet speed and could take a minute.</p>
                    </div>
                    <div className="progress-container">
                        <h3>Step 2: Processing your files with AI</h3>
                        <div className="progress-bar" id="processing-progress"></div>
                        <p className="progress-status" id="processing-status">Extracting the data from your files and generating materials using our AI</p>
                    </div>
                    <p className="note">Note: This could take a minute depending on the size of your uploads.<br />You can close this tab if you want, your materials will continue to process and we will email you when your materials are ready.</p>
                </div>
            </div>
        </div>
    );
};

export default CVUpload;