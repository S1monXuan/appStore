import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
let client;
const url = process.env.MONGO_CLIENT;
// console.log(url);
export const initializeDbConnection = async () => {
    client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}