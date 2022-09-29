const express = require('express') 
const routes = require('./src/routes')
const helmet = require('helmet');
const cors = require('cors');
const app = express() 
const bodyParser = require("body-parser");

require('./src/database')

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(routes)

app.listen(5000)