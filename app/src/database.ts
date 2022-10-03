import mongoose, { Mongoose } from 'mongoose';

class Database {
  public db: Mongoose;

  constructor() {
    this.db = mongoose
  }

  public async init(): Promise<Mongoose> {
    const conc = await this.db.connect('mongodb://localhost:27017/users');
    console.log('[DATABASE] OK');

    return this.db
  }
}

export default Database