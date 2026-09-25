import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import mongoose from 'mongoose';
import { env } from './env.js';
import { logger } from '../utils/logger.js';

/**
 * Connect to MongoDB.
 * Called from server.js. If MONGODB_URI is present but the connection fails,
 * we log and continue — the API can still serve non-DB routes (health).
 */
export async function connectDB() {
  if (!env.MONGODB_URI) {
    logger.warn('MONGODB_URI not set — skipping DB connection.');
    return null;
  }

  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    logger.info(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    logger.error('MongoDB connection failed:', error.message);
    // Do not crash — health endpoint and validation still work.
    // Phase 10 endpoints that require DB will return 503.
    return null;
  }
}

export function isDBConnected() {
  return mongoose.connection.readyState === 1;
}