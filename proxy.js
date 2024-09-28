const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
    const { apiKey, text } = req.body;

    try {
        const response = await axios.post('https://api.textrazor.com/', null, {
            params: {
                apiKey,
                text,
                extractors: 'entities,topics'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error during API call:", error.message); // Log the error message
        console.error("Error details:", error.response ? error.response.data : error); // Log detailed error
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});