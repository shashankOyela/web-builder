import { MongoClient, MongoClientOptions } from "mongodb";

// const { MONGODB_URI, MONGODB_DB } = process.env;
const MONGODB_URI: any = process.env.MONGO_URI;
const MONGODB_DB: any = process.env.MONGODB_DB;

if (!MONGODB_URI || !MONGODB_DB) {
  throw new Error(
    "Please define the MONGODB_URI and MONGODB_DB environment variables inside .env.local"
  );
}

let cachedClient: any = null;
let cachedDb: any = null;
export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Remove useNewUrlParser from options
  const client = await MongoClient.connect(MONGODB_URI, {
    // Add any other options you may need
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as MongoClientOptions);

  const db = await client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
export default connectToDatabase;
