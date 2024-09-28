document.addEventListener('DOMContentLoaded', function() {
    const pdfPreview = document.getElementById('pdf-preview');
    const revampedPdfPreview = document.getElementById('revamped-pdf-preview');
    const pdfUpload = document.getElementById('pdf-upload');
    const uploadedPDF = sessionStorage.getItem('uploadedPDF');

    function displayPDF(pdfSource, container) {
        container.innerHTML = `<embed src="${pdfSource}" type="application/pdf" width="100%" height="100%">`;
    }

    // Display the uploaded PDF in the left card
    if (uploadedPDF) {
        displayPDF(uploadedPDF, pdfPreview);
        sessionStorage.removeItem('uploadedPDF');
    }

    // Display Matshepo_CV.pdf in the right card
    displayPDF('../assets/pdf/Matshepo_CV.pdf', revampedPdfPreview);

    pdfUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = function(e) {
                displayPDF(e.target.result, pdfPreview);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid PDF file.');
        }
    });
});

document.getElementById('revamp-btn').addEventListener('click', function() {
    // Here you would typically send the PDF to your backend for processing
    // For now, we'll just simulate the revamp process
    const revampedContent = document.querySelector('.card.medium-card:nth-child(2) p');
    revampedContent.textContent = 'Processing your PDF... This may take a few moments.';
    
    setTimeout(() => {
        revampedContent.textContent = 'Your PDF has been successfully revamped! Here\'s a summary of the changes...';
    }, 3000);
});