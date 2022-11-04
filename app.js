import express from 'express';
import routes from './routes.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// routes
app.use(routes);

app.listen(PORT, console.log(`server is listening on port ${PORT}... `));

export default app;
