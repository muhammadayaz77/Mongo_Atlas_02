import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.mjs';
import ItemRouter from './routes/ItemRoute.mjs'
let app = express();
app.use(express.json());
dotenv.config();

connectDB();

app.use('/api/items',ItemRouter);

app.listen(process.env.PORT,() => {
  console.log(`http://localhost:${process.env.PORT}`);
})