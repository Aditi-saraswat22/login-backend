const express = require('express');
const app = express();
const routes = require('./Routes/UserRoutes');
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

app.use(express.json()); // body-parser

// Home Route
app.get("/", (req, res) => {
    res.send("Backend is working");
});

// User Routes
app.use('/pages', routes);

// Use Render's port in production, otherwise use 8888 locally
const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
    console.log(`Server is running fine at ${PORT}`);
});