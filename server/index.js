const { response, json } = require('express');
const express = require('express');
const app = express();
const colors = require('colors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())
app.options('*', cors) 

//Middleware
app.use(express.json())
app.use(morgan('tiny'))             //displays local request


app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development',
    })
  );

//connect to database
mongoose.connect(process.env.CONNECTION)
.then(() => {
    console.log('data base connection successful'.cyan.underline.bold)
})
.catch((err) => {
    console.log(err)
})
mongoose.set('strictQuery', false);

app.listen(5000, () => {;
    console.log('server running on port 5000');
})
