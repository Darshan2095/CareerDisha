import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI env var is not set");
}

// Use a global cached connection to avoid creating multiple connections in dev
const globalWithMongoose = global;
if (!globalWithMongoose.mongooseConn) {
  globalWithMongoose.mongooseConn = { conn: null, promise: null };
}

let cached = globalWithMongoose.mongooseConn;

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

