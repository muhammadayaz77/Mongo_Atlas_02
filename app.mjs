import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.mjs';
import ItemRouter from './routes/ItemRoute.mjs'
import cors from 'cors'
let app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://mongo-atlas-react-02.vercel.app/',
  methods: 'GET,POST,PUT,DELETE', // specify allowed methods
  allowedHeaders: 'Content-Type,Authorization', // allowed headers
  credentials: true, // if you're sending cookies or credentials // Allow requests from this origin only
}));
dotenv.config();

connectDB();

app.use('/api/items',ItemRouter);

app.listen(process.env.PORT,() => {
  console.log(`http://localhost:${process.env.PORT}`);
})