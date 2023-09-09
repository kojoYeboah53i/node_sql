//app requirements and dependencies

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')


const PORT = 7000;  //server port

//middleware

//To parse json data
app.use(bodyParser.json())
//allow origin access
app.use(cors({
    origin : '*'
}))
//add public folder to the client 
app.use(express.static(path.join(__dirname, './src/public')));

app.get('/', (req, res) => {
    res.sendFile('index.html', err => {
        if (err) {
          res.status(403).send('error index.html not found');
        }
      });
})
