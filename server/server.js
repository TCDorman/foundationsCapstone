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

const PORT = process.env.PORT || 4005 ; 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

app.post('/seed', seed)
app.get('/shoulders', getFromShoulders)
app.get('/chestandtri', getFromChestAndTri)
app.get('/legs', getFromLegs)
app.get('/backandbi', getFromBackAndBi)