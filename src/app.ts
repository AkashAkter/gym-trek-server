import cors from 'cors';
import express from 'express';

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

export default app;
