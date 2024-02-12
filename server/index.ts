import express, { Request, Response } from 'express';
import next from 'next';
import { portalRouter } from './portal';
import { stripeRouter } from './stripe';
import { loadEnvConfig } from '@next/env';
import { generateUploadURL } from './s3/main';
import cors from 'cors';

const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig('./', dev);

const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.use(cors());
    server.use(express.json());
    server.use('/api/portal', portalRouter);
    server.use('/api/stripe', stripeRouter);
    server.get('/s3Url', async (req: Request, res: Response) => {
      const url = await generateUploadURL();
      res.send({ url });
    });
    server.all('*', (req: Request, res: Response) => {
      let nextRequestHandler = app.getRequestHandler();
      return nextRequestHandler(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
