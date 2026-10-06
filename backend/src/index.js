import express from 'express';
import cors from 'cors';
import solicitudRoutes from './routes/solicitud.routes.js';
import { authenticate } from './middlewares/auth.middleware.js';
const app = express(); 
const PORT = process.env.PORT || 3001;
app.use(cors()); 
app.use(express.json());

// Health check
app.get('/health', (req, res) => { 
  res.json({ status: 'ok', timestamp: new Date() });
});

app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`); 
});
//manejador de Global de errores
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const code = err.code || 'INTERNAL_ERROR';
  const message = err.message || 'Error interno del servidor';

  res.status(status).json({
    error: {
      code,
      message,
      ...(err.details && { details: err.details })
    }
  });
});