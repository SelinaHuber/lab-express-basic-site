const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    // __dirname is a node internal variable that gives us the full absolute path
    // to this directory
    // response.send('<h1>Home Page</h1>')
    // we send the file from the views folder as a response
    response.sendFile(__dirname + '/public/views/homepage.html')
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/public/views/about.html')
})

app.get('/works', function (req, res) {
    res.sendFile(__dirname + '/public/views/works.html')
})

app.get('/photo', function (req, res) {
    res.sendFile(__dirname + '/public/views/photo.html')
})


// starts the server
app.listen(3000, () => {
    console.log('Server listening');
})