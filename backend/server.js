const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose=require('mongoose');

const dotenv = require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true } );
const connection = mongoose.connection;
connection.once('open', ()=> {
  console.log("MongoDB database connection established successfully...");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

server.use('/exercises', exercisesRouter);
server.use('/users', usersRouter);

server.listen(port, ()=> {
  console.log(`Server is running on port ${port}`);
});
