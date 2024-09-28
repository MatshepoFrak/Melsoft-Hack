document.getElementById('cv-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        showUploadModal();
        simulateFileUpload(file);
    }
});

function showUploadModal() {
    document.getElementById('upload-modal').style.display = 'block';
}

function simulateFileUpload(file) {
    const transferProgress = document.getElementById('transfer-progress');
    const processingProgress = document.getElementById('processing-progress');
    const transferStatus = document.getElementById('transfer-status');
    const processingStatus = document.getElementById('processing-status');

    // Simulate file transfer
    let progress = 0;
    const transferInterval = setInterval(() => {
        progress += 10;
        transferProgress.innerHTML = `<div class="progress-bar-fill" style="width: ${progress}%"></div>`;
        if (progress >= 100) {
            clearInterval(transferInterval);
            transferStatus.textContent = 'Transfer complete!';
            simulateProcessing();
        }
    }, 500);

    function simulateProcessing() {
        let progress = 0;
        const processingInterval = setInterval(() => {
            progress += 5;
            processingProgress.innerHTML = `<div class="progress-bar-fill" style="width: ${progress}%"></div>`;
            processingStatus.textContent = `Processing: ${progress}% complete`;
            if (progress >= 100) {
                clearInterval(processingInterval);
                processingStatus.textContent = 'Processing complete!';
                setTimeout(() => {
                    document.getElementById('upload-modal').style.display = 'none';
                }, 2000);
            }
        }, 1000);
    }
}
