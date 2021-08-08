require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { dbConnection } = require('./mongo/connect');
const port = process.env.PORT;

dbConnection();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hi');
});

app.listen(port, () => {
    console.log('Server in port:', port);
});