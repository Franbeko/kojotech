import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

import { env } from './config/env.js';
import { connectDB } from './config/db.js';
import { logger } from './utils/logger.js';

import { globalLimiter } from './middleware/rateLimiter.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

import routes from './routes/index.js';

const app = express();

/* ----------------------- Security & parsing ----------------------- */
app.disable('x-powered-by');
app.set('trust proxy', 1); // behind Cloudflare / Dokploy proxy

app.use(helmet());

app.use(
  cors({
    origin: [env.CLIENT_URL, 'http://localhost:5173'],
    credentials: true,
  })
);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(compression());

if (env.IS_DEV) {
  app.use(morgan('dev'));
}

/* --------------------------- Rate limit --------------------------- */
app.use('/api', globalLimiter);

/* ---------------------------- Routes ------------------------------ */
app.use('/api', routes);

// Friendly root response
app.get('/', (req, res) => {
  res.json({
    service: 'KojoTech API',
    docs: '/api/health',
    tagline: 'Building Digital Solutions.',
  });
});

/* ------------------------ Error handling -------------------------- */
app.use(notFound);
app.use(errorHandler);

/* --------------------------- Bootstrap ---------------------------- */
async function start() {
  await connectDB();
  app.listen(env.PORT, () => {
    logger.info(`KojoTech API listening on http://localhost:${env.PORT}`);
    logger.info(`CORS origin: ${env.CLIENT_URL}`);
  });
}

start();

export default app;