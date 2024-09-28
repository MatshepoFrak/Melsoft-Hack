// No need to import pdf.js since it's included in the HTML

document.addEventListener('DOMContentLoaded', function() {
    const pdfPreview = document.getElementById('pdf-preview');
    const uploadedPDF = sessionStorage.getItem('uploadedPDF');

    if (uploadedPDF) {
        pdfPreview.innerHTML = `<embed src="${uploadedPDF}" type="application/pdf" width="40%" height="40%">`;
        sessionStorage.removeItem('uploadedPDF');
    }
});

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

document.getElementById('revamp-btn').addEventListener('click', async function() {
    const file = document.getElementById('pdf-upload').files[0];
    if (!file || file.type !== 'application/pdf') {
        alert('Please upload a valid PDF file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = async function(e) {
        const pdfData = e.target.result; // This is the ArrayBuffer
        const pdfText = await extractTextFromPDF(pdfData); // Extract text from PDF

        // Update the UI to show processing
        const revampedContent = document.querySelector('.card.medium-card:nth-child(2) p');
        revampedContent.textContent = 'Processing your PDF... This may take a few moments.';

        // Call the function to analyze the CV using TextRazor
        const analysisResult = await analyzeCV(pdfText);
        revampedContent.textContent = 'Your PDF has been successfully analyzed! Here are the details...';
        
        // Display the analysis result (you can format this as needed)
        const details = JSON.stringify(analysisResult, null, 2); // Format the result for better readability
        revampedContent.textContent += `\n${details}`; // Append the details to the content
    };
    reader.readAsArrayBuffer(file); // Read the file as an ArrayBuffer
});

// Function to extract text from PDF using pdf.js
async function extractTextFromPDF(pdfData) {
    const loadingTask = pdfjsLib.getDocument({ data: pdfData });
    const pdfDocument = await loadingTask.promise;
    let pdfText = '';

    for (let i = 1; i <= pdfDocument.numPages; i++) {
        const page = await pdfDocument.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map(item => item.str).join(' ');
        pdfText += pageText + '\n'; // Append text from each page
    }

    return pdfText; // Return the extracted text
}

// Function to analyze CV using TextRazor
async function analyzeCV(pdfText) {
    const API_KEY = "f4f8d63aeef9c1d3cf46dbe620f5a546144facf74b9982e3fe2f5e9b"; // Replace with your actual API key

    try {
        const response = await axios.post('http://localhost:3000/api/analyze', {
            apiKey: API_KEY,
            text: pdfText
        });

        return response.data.response; // Return the analysis result
    } catch (error) {
        console.error("Error analyzing CV:", error);
        return null; // Return null or handle the error as needed
    }
}