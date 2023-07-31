import { MongoClient } from "mongo";

const MONGODB_URL = Deno.env.get("MONGODB_URL") || 'mongodb://127.0.0.1:27017/';
const database = 'salesy';


async function connection() {
    const client = new MongoClient();
    try {
        if (Deno.env.get("MONGODB_TYPE") == 'atlas') {
            await client.connect({
                db: database,
                tls: true,
                servers: [
                    { host: Deno.env.get("MONGODB_HOST1"), port: 27017, },  // primary
                    { host: Deno.env.get("MONGODB_HOST2"), port: 27017, },  // secondary
                    { host: Deno.env.get("MONGODB_HOST3"), port: 27017, },  // secondary
                ],
                credential: {
                    username: Deno.env.get("MONGODB_USER"),
                    password: Deno.env.get("MONGODB_PASSWORD"),
                    db: database,
                    mechanism: "SCRAM-SHA-1",
                },
            });
        } else {
            await client.connect(MONGODB_URL);
        }
        return client.database(database);
    } catch (error) {
        console.error(error);
        console.error(`MONGODB connection error. Exiting.`);
        // Deno.exit(1);
    };
};

export const collections = await connection();
