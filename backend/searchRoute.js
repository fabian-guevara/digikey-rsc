const client = require('./mongodb.js');

const db = client.db('digiKey-dev');
const collection = db.collection('users');
const searchStage = (query) =>
    {
       return  {
            $search: {
            index: "default",
            text: {
                query,
                path: {
                    wildcard: "*"
                }
            }
            }
        }
    };

const searchRoute = async (req, res, next) => {
    const { query } = req.body;
    try {
        const results = await collection.aggregate([searchStage]).toArray();  
        res.json(results);
    } catch (error) {    
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = searchRoute;