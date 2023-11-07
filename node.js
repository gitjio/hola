const express = require('express');
const app = express();

// Define a route that responds with "Hello, World!" using a callback
app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('Hello, World!');
    }, 1000); // Simulate a delay for demonstration
});

// Start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Simulate an event loop with a callback
const simulateEventLoop = (callback) => {
    setTimeout(() => {
        callback('Event loop completed.');
    }, 2000);
};

// Call the function to simulate an event loop
simulateEventLoop((result) => {
    console.log(result);
});
