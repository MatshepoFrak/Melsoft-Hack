document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Content Loaded");
    const toggleVideo = document.getElementById('toggleVideo');
    const userVideo = document.getElementById('userVideo');

    if (!toggleVideo || !userVideo) {
        console.error("Required elements not found. Make sure you have the correct HTML structure.");
        return;
    }

    console.log("Elements:", { toggleVideo, userVideo });

    let isVideoOn = false;
    let stream = null;

    toggleVideo.addEventListener('click', function() {
        console.log("Toggle Video clicked. Current state:", isVideoOn);
        isVideoOn = !isVideoOn;
        
        if (isVideoOn) {
            startVideo();
            this.innerHTML = '<i class="fas fa-video"></i>';
            this.classList.remove('video-off');
        } else {
            stopVideo();
            this.innerHTML = '<i class="fas fa-video-slash"></i>';
            this.classList.add('video-off');
        }
    });

    function startVideo() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(videoStream => {
                console.log("Got media stream:", videoStream);
                stream = videoStream;
                userVideo.srcObject = stream;
                userVideo.play();
                // Remove the background image when video starts
                userVideo.style.backgroundImage = "none";
            })
            .catch(err => {
                console.error("Error accessing the camera:", err);
                isVideoOn = false;
                toggleVideo.innerHTML = '<i class="fas fa-video-slash"></i>';
                toggleVideo.classList.add('video-off');
                // Display the human.png image if there's an error
                userVideo.style.backgroundImage = "url('assets/images/human.png')";
                userVideo.style.backgroundSize = "cover";
                userVideo.style.backgroundPosition = "center";
            });
    }

    function stopVideo() {
        if (stream) {
            console.log("Stopping video track");
            stream.getVideoTracks().forEach(track => track.stop());
            userVideo.srcObject = null;
        }
    }

    const reactionsBtn = document.getElementById('reactionsBtn');
    const heygenVideo = document.getElementById('heygenVideo');

    if (!reactionsBtn || !heygenVideo) {
        console.error("Reactions button or HeyGen video element not found.");
        return;
    }

    // Preload the reaction video
    const reactionVideoSrc = "../assets/images/secvid.mp4";
    let isVideoPreloaded = false;

    function preloadVideo() {
        if (!isVideoPreloaded) {
            console.log("Preloading video");
            heygenVideo.src = reactionVideoSrc;
            heygenVideo.load();
            isVideoPreloaded = true;
        }
    }

    // Preload video on Enter key press
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            preloadVideo();
        }
    });

    reactionsBtn.addEventListener('click', function() {
        console.log("Reactions button clicked");
        preloadVideo();
        heygenVideo.play();
    });

    if (heygenVideo) {
        heygenVideo.muted = false;
        
        // Function to attempt playing the video
        function attemptPlay() {
            heygenVideo.play().catch(error => {
                console.log('Autoplay with sound was prevented. Retrying muted.');
                heygenVideo.muted = true;
                heygenVideo.play().then(() => {
                    console.log('Video is playing muted. Click to unmute.');
                }).catch(error => {
                    console.error('Failed to play video:', error);
                });
            });
        }
        

        // Attempt to play immediately
        attemptPlay();

        // Add click event listener to unmute if necessary
        document.addEventListener('click', function unmuteVideo() {
            if (heygenVideo.muted) {
                heygenVideo.muted = false;
                attemptPlay();
                document.removeEventListener('click', unmuteVideo);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('endCallForm');
        const fileInput = document.getElementById('pdfAttachment');

        form.addEventListener('submit', function(e) {
            e.preventDefault();

        // Create a new File object with the PDF
        fetch('assets/images/Invoice-1122153.pdf')
            .then(response => {
                if (!response.ok) {
                    throw new Error('PDF not found');
                }
                return response.blob();
            })
            .then(blob => {
                console.log('PDF blob:', blob);
                const file = new File([blob], 'Invoice-1122153.pdf', { type: 'application/pdf' });
                console.log('File object created:', file);
                
                // Set the file to the file input
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                fileInput.files = dataTransfer.files;
                console.log('File attached to input:', fileInput.files[0]);

                // Submit the form
                fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        alert('Tutorial ended and email sent successfully!');
                        // You can add any additional actions here, such as closing the window
                    } else {
                        response.json().then(data => {
                            alert(`Error: ${data.error}`);
                        });
                    }
                }).catch(error => {
                    console.error('Error:', error);
                    alert('There was an error. Please try again.');
                });
            });
    });
});

});