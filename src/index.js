const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

app.db = db;

app.listen(3000, () => {
    console.log("Servidor rodando da porta 3000!")
})
