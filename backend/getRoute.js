const client = require('./mongodb.js');

const dbName = 'digiKey-dev';
const usersCollection = 'users';

const getAllUsers = async (req, res, next) => {
    try {
        // Connect to MongoDB
        const db = client.db(dbName);

        // get the refernce to the users collection
        const collection = db.collection(usersCollection);

        const results = await collection.find({}).limit(10).toArray();

            // Send the results as the response
        res.status(200).json(results);
    } catch (error) {
        // Handle any errors
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = getAllUsers;