const express = require('express')
const path = require('path');
const cors = require('cors')
const app = express();
const {seed} = require('./seed');
const { getFromShoulders, getFromChestAndTri, getFromLegs, getFromBackAndBi } = require('./controller');


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'))
});

const {SERVER_PORT} = process.env || 4005 ; 

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`)
});

app.post('/seed', seed)
app.get('/shoulders', getFromShoulders)
app.get('chestandtri', getFromChestAndTri)
app.get('legs', getFromLegs)
app.get('backandbi', getFromBackAndBi)