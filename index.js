// const express = require('express'); // Import Express
// const app = express();              // Create Express app
// const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// // API Route - When someone visits '/', send JSON response
// app.get('/', (req, res) => {
//     res.json({ message: "Hello, CI/CD!" });
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// module.exports = app; // Export app for testing
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, CI/CD!');
});

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Export the server for testing
module.exports = server;
