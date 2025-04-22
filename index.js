const express = require('express');
const connectToDatabase = require('./config/db');
const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/note');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

// Connect to MongoDB using async/await
(async () => {
    try {
        await connectToDatabase();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
})();

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Notes Backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});
