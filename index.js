const express = require('express') 
const routes = require('./src/routes')
const helmet = require('helmet');
const cors = require('cors');
const app = express() 
const bodyParser = require("body-parser");
const db = require('./src/database');

app.db = db

const port = process.env.PORT || 4000;


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(routes)


db.sync({alter: true}).then(() => {
    app.listen(port, () => {
        console.info("Aplicação rodando em http://localhost:4000");
    })
})

