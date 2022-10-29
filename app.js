import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes.js';

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 3000;

const app = express();

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.PASSWORD}@cluster0.pg3doss.mongodb.net/IdeiaOriginal?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('CONNECTED TO DATABASE');
  });
// routes

app.use(express.json());
app.use(routes);

app.listen(PORT, console.log(`server is listening on port ${PORT}... `));

export default app;
