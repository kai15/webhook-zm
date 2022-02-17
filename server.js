const http = require('http');
const express = require('express')
// Create a new instance of express
const app = express()
const port = 8007
// Globals
app.set('connection', require('./connection'))

app.post('/zoom-webhook', async (req, res) => {
    // let _connection = await req.app.get('connection');
    console.log(JSON.stringify(req.body.payload));
    // try {
    //     _connection.query("INSERT INTO `fammi`.`zoom_participants`(zoom_id, email, name, join_time, created) \
	// 		VALUE(?, ?, ?, ?, ?)",
    //         [body.object, body.object, body.object, body.object, body.object])
    // }catch (e) {
    //     console.log('error')
    //     console.log(e.message)
    // }
    res.json({"response":"ok"});
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});