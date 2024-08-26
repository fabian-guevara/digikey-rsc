const express = require('express');
const client = require('./mongodb.js');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
    client.db('sample_airbnb').collection('listingsAndReviews').find({}).toArray((err, result) => {
        if (err) {
            console.error('Error getting data from MongoDB:', err);
            res.send('Error getting data from MongoDB');
        } else {
            console.log('Data from MongoDB:', result);
            res.send(result);
        }
    });
});

app.post('/data', (req, res) => {
    const data = req.body;
    // Process the data here
    res.send('Data received successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});