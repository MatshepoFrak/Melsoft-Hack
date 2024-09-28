// Import Axios for making HTTP requests
const axios = require('axios');

// Your TextRazor API key
const API_KEY = "f4f8d63aeef9c1d3cf46dbe620f5a546144facf74b9982e3fe2f5e9b"; // Replace with your actual API key

// Function to analyze text using TextRazor
async function analyzeText(text) {
    try {
        const response = await axios.post('https://api.textrazor.com/', null, {
            params: {
                apiKey: API_KEY,
                text: text,
                extractors: 'entities,topics' // Specify the extractors you want to use
            }
        });

        // Process the response
        const entities = response.data.response.entities;
        const topics = response.data.response.topics;

        console.log("Entities:", entities);
        console.log("Topics:", topics);
    } catch (error) {
        console.error("Error analyzing text:", error);
    }
}

// Example text to analyze (you can replace this with the content of a CV)
const exampleText = "John Doe is a software engineer with experience in JavaScript, Python, and machine learning.";

// Call the function to analyze the text
analyzeText(exampleText);