import {response} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path: 'config.env'});
mongoose
  .connect(
    `mongodb+srv://admin:${process.env.PASSWORD}@cluster0.pg3doss.mongodb.net/IdeiaOriginal?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('CONNECTED TO DATABASE');
  });

import User from '../schemas/User.js';
class UserController {
  async create(req, res) {
    const {name, email, password} = req.body;

    try {
      const user = await User.create({
        name,
        email,
        password,
      });
      return res.json(user);
    } catch (err) {
      return res.status(500).send({
        error: 'User Registration Failed',
        message: err,
      });
    }
  }

  async get(req, res) {
    try {
      const {name} = req.body;
      const user = await User.find({name: name});
      return res.json(user);
    } catch (err) {
      return res.status(500).send({
        error: 'Trying to find user failed',
        message: err,
      });
    }
  }
}

export default new UserController();
