const mongoose = require('mongoose');
const redis = require('redis');
require('dotenv').config();

const redisClient = redis.createClient();

// Promisify Redis functions for async/await usage
// const getAsync = promisify(redisClient.get).bind(redisClient);
// const setAsync = promisify(redisClient.set).bind(redisClient);

const mongo_url = process.env.MONGO_URL;


// Use for Mongo Atlas
// mongoose.connect(`mongodb+srv://${mongo_username}:${mongo_password}@${mongo_cluster}/${mongo_database}?retryWrites=true&w=majority`
// , { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log(`Connected to: ${mongoose.connection.name}`))
// .catch(err => console.log(err));

mongoose.connect(`${mongo_url}?retryWrites=true&w=majority`
, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log(`Connected to: ${mongoose.connection.name}`))
.catch(err => console.log(err));



// async function getDataFromDatabase(id) {
//     // Check if the data is already cached
//     const cachedData = await getAsync(id);
//     if (cachedData) {
//       console.log('Fetching data from cache');
//       return JSON.parse(cachedData);
//     }
  
//     // If not cached, fetch data from the database
//     console.log('Fetching data from the database');
//     const data = await MyModel.findById(id).exec();
  
//     // Cache the fetched data
//     await setAsync(id, JSON.stringify(data));
  
//     return data;
//   }



//   async function main() {
//     const data1 = await getDataFromDatabase();
//     console.log(data1);
  
//     // Fetch the same data again to demonstrate caching
//     const data2 = await getDataFromDatabase();
//     console.log(data2);
//   }
  
//   main().catch(console.error);


// mongoose.connect(`mongodb://172.17.0.1:27017/devops_project` 
// , { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log(`Connected to: DB`))
// .catch(err => console.log(err));


module.exports = mongoose;
