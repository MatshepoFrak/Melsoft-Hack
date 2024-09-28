document.getElementById('pdf-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = function(e) {
            const pdfPreview = document.getElementById('pdf-preview');
            pdfPreview.innerHTML = `<embed src="${e.target.result}" type="application/pdf" width="100%" height="100%">`;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a valid PDF file.');
    }
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