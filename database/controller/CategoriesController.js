import Category from '../schemas/Category.js';
import DatabaseConnection from '../config/mongo.js';

class CategoriesController {
  async create(req, res) {
    try {
      await DatabaseConnection.connect();
      const {name, description, type} = req.body;
      const category = await Category.create({
        name,
        description,
        type,
      });
      return res.json(category);
    } catch (err) {
      return res.status(500).send({
        error: 'It was not possible to create the category',
        message: err,
      });
    }
  }

  async get(req, res) {
    try {
      await DatabaseConnection.connect();
      const {name} = req.body;
      let category = [];
      if (name) {
        category = await Category.find({name: name});
      } else {
        category = await Category.find({});
      }
      return res.json(category);
    } catch (err) {
      return res.status(500).send({
        error: 'It was not possible to find the category that you seek',
        message: err,
      });
    }
  }

  async delete(req, res) {
    try {
      await DatabaseConnection.connect();
      const {name} = req.body;
      const deletedCategory = await Category.deleteOne({name: name});
      return res.json(deletedCategory);
    } catch (err) {
      console.log('ERR', err);
      return res.status(500).send({
        error: 'It was not possible to delete the user',
        message: err,
      });
    }
  }

  async update(req, res) {
    try {
      await DatabaseConnection.connect();
      const {name, description, type} = req.body;
      const category = await Category.updateOne(
        {name: name},
        {name: name, description: description, type: type}
      );
      return res.json(category);
    } catch (err) {
      return res.status(500).send({
        error: 'It was not possible to update the category',
        message: err,
      });
    }
  }
}

export default new CategoriesController();
