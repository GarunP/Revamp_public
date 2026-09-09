const express = require('express');
const dotenv = require('dotenv');

const env = process.argv[2] || "dev";
dotenv.config({ path: `.env.${env}` });

function log(message) {
    const time = new Date().toISOString();
    console.log(`[${time}] [${env.toUpperCase()}] ${message}`);
}

const app = express();

const PORT = process.env.PORT || 3000;
const APP = process.env.APP || "Development";

app.get('/', (req, res) => {
    res.send("Hello from express from " + APP);
});

app.get('/health', (req, res) => {
    log("Health Check Called");
    res.status(200).json({
        status: "UP"
    });
});

app.listen(PORT, () => {
    log("server is running on port " + PORT);
});
