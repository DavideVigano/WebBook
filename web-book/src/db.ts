import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://Admin:YwYmFUWoWxwSGv4V@cluster0.5kp2blv.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

export async function connectToMongoDB() {
    await client.connect();
    console.log("Connected to MongoDB");
    return client;
}
