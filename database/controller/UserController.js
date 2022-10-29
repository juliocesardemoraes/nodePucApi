import {response} from 'express';
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
        error: 'Registration Failed',
        message: err,
      });
    }
  }

  async get(req, res) {
    res.send('Reached');
  }
}

export default new UserController();
