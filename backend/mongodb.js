const { MongoClient } = require('mongodb');

// Connection URI for your MongoDB Atlas cluster
// add it to a .env file inside this folder
// example .env file
// DATABASE_URI=mongodb+srv://...
const uri = process.env.DATABASE_URI;

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB Atlas cluster
client.connect((err) => {
    if (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
        process.exit(1);
    }
    console.log('Connected to MongoDB Atlas');

    // Export the client for other modules to use
    
});

module.exports = client;