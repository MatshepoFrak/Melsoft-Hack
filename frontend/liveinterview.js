import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/video-meeting.css';
import '../assets/styles/styles.css';

const LiveInterview = () => {
  const handleEndCall = (e) => {
    e.preventDefault();
    // Handle end call logic here
    console.log("Ending call...");
    // Stop video streams
    const userVideo = document.getElementById('userVideo');
    if (userVideo.srcObject) {
      userVideo.srcObject.getTracks().forEach(track => track.stop());
    }
    // Hide video elements
    document.querySelector('.video-grid').style.display = 'none';
    // Show a message
    const message = document.createElement('div');
    message.textContent = 'Call ended. Thank you for participating!';
    message.style.textAlign = 'center';
    message.style.fontSize = '24px';
    document.querySelector('.video-meeting').appendChild(message);
    // Disable controls
    document.querySelectorAll('.control-btn').forEach(btn => btn.disabled = true);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">Employ Hub</div>
        <nav>
          <ul>
            <li>Membership</li>
            <li>Community</li>
            <li>Feature</li>
            <li>Help</li>
            <li>About</li>
          </ul>
        </nav>
        <Link to="/logout" className="login-btn">Logout</Link>
      </header>
    
      <main className="video-meeting">
        <div className="video-grid">
          <div className="video-container heygen-video">
            <video 
              id="heygenVideo" 
              src="../assets/images/firstvid.mp4"
              autoPlay
              playsInline
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
            <div className="participant-name">Julia Pavlovska</div>
          </div>
          <div className="video-container user-video">
            <video 
              id="userVideo" 
              autoPlay 
              muted 
              style={{width: '100%', height: '100%', objectFit: 'cover'}}
            />
            <div className="participant-name">Matshepo</div>
          </div>
        </div>
        <div className="meeting-controls">
          <button id="toggleVideo" className="control-btn">
            <i className="fas fa-video"></i>
          </button>
          <button id="securityBtn" className="control-btn"><i className="fas fa-pen"></i></button>
          <button id="recordBtn" className="control-btn"><i className="fas fa-record-vinyl"></i></button>
          <button id="reactionsBtn" className="control-btn"><i className="fas fa-smile"></i></button>
          <button id="moreBtn" className="control-btn"><i className="fas fa-sad"></i></button>
          <form 
            id="endCallForm" 
            action="https://formspree.io/f/myzgannl" 
            method="POST" 
            encType="multipart/form-data" 
            style={{display: 'inline'}}
            onSubmit={handleEndCall}
          >
            <input type="hidden" name="email" value="tebogomatshepo@gmail.com" />
            <input 
              type="hidden" 
              name="message" 
              value={`Hi Matshepo,

                  We are happy to let you know that we recorded your today's live interview preparations. Find the below document for reference.

                  Recording Link: ${recordingLink}


                  Happy Job Hunting,

                  Employ Hub.`}
            />
            <input type="file" name="attachment" id="pdfAttachment" style={{display: 'none'}} />
            <button id="endCall" className="end-call-btn" type="submit">End Interview</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LiveInterview;