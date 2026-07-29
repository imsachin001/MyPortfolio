import mongoose from "mongoose";

export async function connectDatabase(uri: string | undefined) {
  if (!uri) {
    console.warn("MONGODB_URI is not set. Running without a database connection.");
    return null;
  }

  await mongoose.connect(uri);
  return mongoose.connection;
}
