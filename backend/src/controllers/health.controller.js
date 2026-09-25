import { isDBConnected } from '../config/db.js';
import { env } from '../config/env.js';

export function getHealth(req, res) {
  res.json({
    status: 'ok',
    service: 'kojotech-api',
    env: env.NODE_ENV,
    db: isDBConnected() ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  });
}