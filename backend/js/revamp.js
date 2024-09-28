document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your actual OpenAI API key
    const uploadForm = document.getElementById('cv-upload-form');
    const fileInput = document.getElementById('cv-file');
    const resultContainer = document.getElementById('result-container');

    uploadForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const file = fileInput.files[0];
        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            // First, upload the file to your server
            const uploadResponse = await fetch('/upload-cv', {
                method: 'POST',
                body: formData
            });

            if (!uploadResponse.ok) {
                throw new Error('File upload failed');
            }

            const { text } = await uploadResponse.json();

            // Now, use OpenAI API to revamp the CV
            // Fetch the API key from apikey.json
            const apiKeyResponse = await fetch('/apikey.json');
            const { apiKey } = await apiKeyResponse.json();

            const openaiResponse = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    prompt: `Revamp the following CV to make it more professional:\n\n${text}\n\nImproved CV:`,
                    max_tokens: 1000,
                    n: 1,
                    stop: null,
                    temperature: 0.7,
                })
            });

            if (!openaiResponse.ok) {
                throw new Error('OpenAI API request failed');
            }

            const { choices } = await openaiResponse.json();
            const revampedCV = choices[0].text.trim();

            // Display the revamped CV
            resultContainer.innerHTML = `<h2>Revamped CV:</h2><pre>${revampedCV}</pre>`;

        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while processing your CV. Please try again.');
        }
    });
});