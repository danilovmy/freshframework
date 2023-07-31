import { MongoClient } from "mongo";

const MONGODB_URL = Deno.env.get("MONGODB_URL") || 'mongodb://127.0.0.1:27017/';
const database = 'salesy';

async function connection() {
    const client = new MongoClient();
    try {
        await client.connect(MONGODB_URL);
        return client.database(database);
    } catch (error) {
        console.error(error);
        console.error(`MONGODB connection error. Exiting.`);
        // Deno.exit(1);
    };
};

export const collections = await connection();
