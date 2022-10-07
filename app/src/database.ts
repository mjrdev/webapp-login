import mongoose, { Mongoose } from 'mongoose';

class Database {
  public db: Mongoose;

  constructor() {
    this.db = mongoose
  }

  public async init(): Promise<Mongoose | void> {
    try {
      console.log('[DATABASE] TRY CONECTION')
      const conc = await this.db.connect('mongodb://localhost:27017/users');
      console.log('[DATABASE] OK');

      return this.db
    } catch(err) {
      console.log(err)

      return
    }
  }
}

export default Database