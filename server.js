// const http = require('http');
// const express = require('express')
// const cors = require('cors')
// // Create a new instance of express
// const app = express()
// const port = 8007
// // Globals
// app.use(cors());
// // app.set('connection', require('./connection'))
//
// app.post('/zoom-webhook', async (req, res) => {
//     // let _connection = await req.app.get('connection');
//     console.log(JSON.stringify(req.body.payload));
//     // try {
//     //     _connection.query("INSERT INTO `fammi`.`zoom_participants`(zoom_id, email, name, join_time, created) \
// 	// 		VALUE(?, ?, ?, ?, ?)",
//     //         [body.object, body.object, body.object, body.object, body.object])
//     // }catch (e) {
//     //     console.log('error')
//     //     console.log(e.message)
//     // }
//     res.json({"response":"ok"});
// });
//
// // const server = http.createServer((req, res) => {
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end('Hello World');
// // });
//
// app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
app.get('/', (req, res) => res.send('<h2> Hello World! </h2>'));
app.set('connection', require('./connection'))
app.post('/zoom-webhook', (req, res) => {
    // let _connection = await req.app.get('connection');
    console.log("payload =>", (req));
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

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))