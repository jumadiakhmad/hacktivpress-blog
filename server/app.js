const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan')
const mongoose = require('mongoose');
const users = require('./routes/users')
const cors = require('cors')
const articles = require('./routes/articles')

mongoose.connect('mongodb://localhost/jumadi-hacktivepress-blog')

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}))
app.use('/users', users );
app.use('/articles', articles);

app.listen(3000, () => console.log('Listening port 3000'));
