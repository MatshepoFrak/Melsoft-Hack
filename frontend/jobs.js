import React from 'react';
import Navbar from './Navbar'; 
import '../assets/styles/jobs.css';
import '../assets/styles/styles.css';

const Jobs = () => {
  return (
    <div className="container">
      <Navbar />
      <main>
        <div className="container">
          <div className="row align-items-start" style={{marginTop: '30px'}}>
            <JobCard 
              title="Data Manager Analyst"
              company="Apple Inc."
              logo="../assets/images/apple.png"
              salary="$45k - $55k"
              location="South Africa"
            />
            <JobCard 
              title="Sr. UI Designer"
              company="Microsoft Inc."
              logo="../assets/images/microsoft.png"
              salary="$45k - $55k"
              location="South Africa"
            />
            <JobCard 
              title="Graphics Designer"
              company="Microsoft Inc."
              logo="../assets/images/microsoft.png"
              salary="$45k - $55k"
              location="South Africa"
            />
          </div>
          <div className="row align-items-start" style={{marginTop: '50px'}}>
            <JobCard 
              title="WordPress Developer"
              company="Behance Inc."
              logo="../assets/images/behance.png"
              salary="$45k - $55k"
              location="South Africa"
            />
            <JobCard 
              title="Cyber Security Analyst"
              company="Behance Inc."
              logo="../assets/images/behance.png"
              salary="$45k - $55k"
              location="South Africa"
            />
            <JobCard 
              title="Cloud Engineer"
              company="Behance Inc."
              logo="../assets/images/behance.png"
              salary="$45k - $55k"
              location="South Africa"
            />
          </div>
          <div className="row align-items-start" style={{marginTop: '50px'}}>
            <JobCard 
              title="AI Researcher"
              company="Behance Inc."
              logo="../assets/images/behance.png"
              salary="$45k - $55k"
              location="United States of America"
            />
            <JobCard 
              title="Web Developer"
              company="Behance Inc."
              logo="../assets/images/behance.png"
              salary="$45k - $55k"
              location="United States of America"
            />
            <div className="col"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

const JobCard = ({ title, company, logo, salary, location }) => (
  <div className="col">
    <div className="job-card">
      <h3>{title}</h3>
      <p style={{marginLeft: '20%'}}>
        <img src={logo} alt={company} style={{width: '50px', height: '50px'}} />
        {company}
      </p>
      <p><strong>Salary:</strong> {salary}</p>
      <p><strong>Posted:</strong> 05 Hours Ago</p>
      <p><span><i className="fa fa-map-pin"></i></span>{location}</p>
      <button>Apply Position</button>
    </div>
  </div>
);

export default Jobs;
