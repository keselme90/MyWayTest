require('dotenv/config');
import express, { Application } from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import routes from './routes';

const connectionString = process.env.DB_CONNECTION || '';

const app:Application = express();

//Connect to DB
mongoose.connect(
    connectionString,
    () => {console.log('connected');
});

app.use(express.json());
app.use(routes);
app.listen(5000, () => console.log('Server running'));
