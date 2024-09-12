import cors from 'cors';
import express from 'express';
import router from './app/routes';

const app = express();

// Middlewares
app.use(
  cors({
    origin: '*',
  }),
);
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from server');
});

app.use('/api/v1', router);

export default app;
