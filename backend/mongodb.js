const { MongoClient } = require('mongodb');

// Connection URI for your MongoDB Atlas cluster
const uri = 'mongodb+srv://test:123@digikey-cert.f1jabk2.mongodb.net/?retryWrites=true&w=majority&appName=DigiKey-Cert';

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