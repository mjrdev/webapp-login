import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export default async function init(): Promise<any> {
  const conc = await mongoose.connect('mongodb://localhost:27017/users')
  .then((res) => {
    console.log(`[DATABASE] Success connect`);
  })
  .catch((err) => {
    console.log(`[DATABASE] An error has occurred ${err}`)
  });

  return mongoose
}