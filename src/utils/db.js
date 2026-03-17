const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'aurora-insights';
const getClient = async () => {
    const client = new MongoClient(url);
    await client.connect();
    return client;
};
module.exports = { getClient };