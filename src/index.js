import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';
import dbConfig from './config';
import userRoutes from './routes/user.route';
import todoRoutes from './routes/todo.route';

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.DATABASE_URI, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(helmet());

app.use('/api/v1', userRoutes);
app.use('/api/v1', todoRoutes);


app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Assessment API" });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});