import mongoose from 'mongoose';
import dotenv from 'dotenv';

class DatabaseConnection {
  constructor() {
    this.client = null;
  }
  async connect() {
    try {
      if (this.client) {
        console.log('Não precisa fechar ainda a conexão');
        return;
      }
      dotenv.config({path: 'config.env'});
      this.client = mongoose
        .connect(
          `mongodb+srv://admin:${process.env.PASSWORD}@cluster0.pg3doss.mongodb.net/IdeiaOriginal?retryWrites=true&w=majority`
        )
        .then(() => {
          console.log('CONNECTED TO DATABASE');
        });
    } catch (err) {
      console.log('DATABASE CONNECTION ERROR', err);
    }
  }
  async disconnect() {
    await this.client.close();
    this.client = null;
  }
}

export default new DatabaseConnection();
