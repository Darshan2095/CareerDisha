import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI env var is not set");
}

// Cache the connection across hot reloads and serverless invocations
const globalWithMongoose = global;
if (!globalWithMongoose.__quiz_mongoose) {
  globalWithMongoose.__quiz_mongoose = { conn: null, promise: null };
}

let cached = globalWithMongoose.__quiz_mongoose;

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default mongoose;


