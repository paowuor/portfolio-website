import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  // Increase payload limit for image uploads
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // API endpoint to upload and save photo directly to public/
  app.post('/api/upload-photo', (req, res) => {
    try {
      const { filename, dataUrl } = req.body;
      if (!filename || !dataUrl) {
        return res.status(400).json({ error: 'Missing filename or dataUrl' });
      }

      const safeName = path.basename(filename);
      const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      const targetPath = path.resolve(publicDir, safeName);

      fs.writeFileSync(targetPath, buffer);
      console.log(`Saved photo to: ${targetPath} (${buffer.length} bytes)`);

      return res.json({ success: true, filename: safeName, size: buffer.length });
    } catch (err) {
      console.error('Error saving photo:', err);
      return res.status(500).json({ error: String(err) });
    }
  });

  // API endpoint to check which photos exist
  app.get('/api/photos-status', (_req, res) => {
    const checkFile = (name: string) => {
      const p = path.resolve(publicDir, name);
      return fs.existsSync(p) && fs.statSync(p).size > 1000;
    };

    res.json({
      NY1A0074: checkFile('NY1A0074.jpg'),
      NY1A9768: checkFile('NY1A9768.jpg'),
      NY1A9777: checkFile('NY1A9777.jpg'),
    });
  });

  // Serve static public assets
  app.use(express.static(publicDir));

  // Vite development middleware
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();
