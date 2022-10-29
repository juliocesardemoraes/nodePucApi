import express from 'express';
import routes from './routes.js';

const PORT = process.env.PORT || 3000;

const app = express();

// routes

app.use(express.json());
app.use(routes);

app.listen(PORT, console.log(`server is listening on port ${PORT}... `));

export default app;
