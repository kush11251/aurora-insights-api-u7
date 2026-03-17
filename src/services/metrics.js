const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'aurora-insights';
const metricsCollectionName = 'metrics';
const getMetrics = async () => {
    const client = new MongoClient(url);
    const db = client.db(dbName);
    const collection = db.collection(metricsCollectionName);
    const metrics = await collection.find().toArray();
    client.close();
    return metrics;
};
module.exports = { getMetrics };