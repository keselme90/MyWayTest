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

app.use(express.json({limit: '10mb'}));
app.use(routes);
app.listen(process.env.PORT || 5000, () => console.log('Server running'));
