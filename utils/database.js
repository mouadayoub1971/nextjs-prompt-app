import mongoose from 'mongoose'

let isConnected = false; 

export const connectToDB = async () => {
 mongoose.set('strictQuery', true);

 if (isConnected) {
  console.log('MongoDB is already is connected')
 return 
 }
 try {
  await mongoose.connect(process.env.MONGODB_URI, {
   dbName: 'myapp',
  });

  isConnected = true

  console.log('MongoDb connected')
 } catch (error) {
  console.log(error)
 }
}