require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;
const getAllUsers = require('./getRoute.js');
const postUser = require('./addUserRoute.js');
const search = require('./searchRoute.js');
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/', getAllUsers);

app.post('/', postUser);

app.post('/search', search);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});