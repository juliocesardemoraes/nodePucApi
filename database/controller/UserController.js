import User from '../schemas/User.js';
import DatabaseConnection from '../config/mongo.js';

class UserController {
  async create(req, res) {
    const {name, email, password, cpf} = req.body;

    try {
      await DatabaseConnection.connect();
      const user = await User.create({
        name,
        email,
        password,
        cpf,
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
      await DatabaseConnection.connect();
      const {cpf} = req.body;
      const user = await User.find({cpf: cpf});
      return res.json(user);
    } catch (err) {
      return res.status(500).send({
        error: 'Trying to find user failed',
        message: err,
      });
    }
  }

  async delete(req, res) {
    try {
      await DatabaseConnection.connect();
      const {cpf} = req.body;
      const deletedUser = await User.deleteOne({cpf: cpf});
      return res.json(deletedUser);
    } catch (err) {
      return res.status(500).send({
        error: 'It was not possible to delete the user',
        message: err,
      });
    }
  }

  async update(req, res) {
    try {
      await DatabaseConnection.connect();
      const {cpf, name, email} = req.body;
      const user = await User.updateOne({cpf: cpf}, {name: name, email: email});
      return res.json(user);
    } catch (err) {
      return res.status(500).send({
        error: 'It was not possible to update the user',
        message: err,
      });
    }
  }
}

export default new UserController();
