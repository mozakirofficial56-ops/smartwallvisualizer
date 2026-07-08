import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

import { connectDB } from './src/backend/config/db';
import { seedData } from './src/backend/seed/seed';
import authRoutes from './src/backend/routes/auth';
import projectRoutes from './src/backend/routes/projects';
import colorRoutes from './src/backend/routes/colors';
import patternRoutes from './src/backend/routes/patterns';
import adminRoutes from './src/backend/routes/admin';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  await connectDB();
  await seedData();


  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

  // Serve uploads dir statically
  app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

  // API Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/projects', projectRoutes);
  app.use('/api/colors', colorRoutes);
  app.use('/api/patterns', patternRoutes);
  app.use('/api/admin', adminRoutes);

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // For Express 4
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
