
    document.getElementById('cv-upload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            console.log('CV file selected:', file.name);
            // Here you can add code to handle the CV file upload
        }
    });

    document.getElementById('cover-letter-upload').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            console.log('Cover letter file selected:', file.name);
            // Here you can add code to handle the cover letter file upload
        }
    });
