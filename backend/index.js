const express = require('express');
const client = require('./mongodb.js');
const app = express();
const port = 3000;
const getAllUsers = require('./getRoute.js');
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/', getAllUsers);

app.post('/data', (req, res) => {
    const data = req.body;
    // Process the data here
    res.send('Data received successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});