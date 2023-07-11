const express = require('express')
const http = require('http')
const morgan = require('morgan')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')
const WebSocket = require('ws')
const accountsRoutes = require('./Routes/accountRoutes.js')
const userRoutes = require('./Routes/userRoutes.js')

const PORT = process.env.PORT
const app = express()

app.use(morgan('dev'))

app.use(bodyParser.json())



app.use(
    cors({
        origin: "http://127.0.0.1:5500",
        credentials: true,
    })
)


app.use('/accounts', accountsRoutes)
app.use('/user', userRoutes)



const server = http.createServer(app)   

const wss = new WebSocket.Server({ server });       


                
wss.on('connection', (ws) => {
    console.log('Connection Established')

        
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send(`${message}`)
    });

  
    ws.on('close', () => {
        console.log(`WebSocket disconnected:`);
    });
});

 

server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})