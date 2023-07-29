import { MongoClient } from "mongo"

const MONGODB_URL = 'mongodb://localhost:27017/'
const database = 'salesy'

async function create_connection (client) {
    try {
        // const database = client.database("TODO_APP");
        await client.connect(`${MONGODB_URL}${database}`);
    } catch {
        console.error(`MONGODB connection error. Exiting.`)
        Deno.exit(1)
    }
    return client
}

export default connection = create_connection(new MongoClient())
