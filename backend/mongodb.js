const { MongoClient } = require('mongodb');

// Connection URI for your MongoDB Atlas cluster
const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB Atlas cluster
client.connect((err) => {
    if (err) {
        console.error('Error connecting to MongoDB Atlas:', err);
        process.exit(1);
    }
    console.log('Connected to MongoDB Atlas');

    // Export the client for other modules to use
    module.exports = client;
});