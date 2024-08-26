// seed.js
const { MongoClient } = require('mongodb');

// Connection URI for your MongoDB Atlas cluster
const uri = 'mongodb+srv://test:123@digikey-cert.f1jabk2.mongodb.net/?retryWrites=true&w=majority&appName=DigiKey-Cert';

// Create a new MongoClient
const client = new MongoClient(uri);

const { faker } = require('@faker-js/faker');

// Connection URL

const dbName = 'digiKey-dev'; // Replace with your database name

(async function seedDatabase() {
   
    try {

      console.log('Connected to the database');
  
      const db = client.db(dbName);
  
      const usersCollection = db.collection('users');
      const userLoginsCollection = db.collection('userLogins');
  
      // Create an array to hold the users
      const users = [];
  
      for (let i = 0; i < 30; i++) {
        // Generate random user login data and insert it into the userLogins collection
        const userLogin = {
          username: faker.internet.userName(),
        };
        const userLoginResult = await userLoginsCollection.insertOne(userLogin);
  
        // Randomly choose between an array or a string for the address
        const address = Math.random() > 0.5
          ? faker.location.streetAddress()
          : [faker.location.streetAddress(), faker.location.city(), faker.location.country()];
  
        // Generate random user data
        const user = {
          name: faker.person.fullName(),
          age: faker.number.int({ min: 18, max: 80 }),
          address: address,
          userLogins: [
            {
              id: userLoginResult.insertedId,
              username: userLogin.username,
            },
          ],
        };
  
        // Add the user to the users array
        users.push(user);
      }
  
      // Insert all users into the users collection
      await usersCollection.insertMany(users);
  
      console.log('Seed data inserted successfully');
    } catch (err) {
      console.error('Error inserting seed data:', err);
    } finally {
      await client.close();
      console.log('Connection closed');
    }
  })();
