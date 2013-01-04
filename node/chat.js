var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs')

app.listen(8003);

function handler (req, res) {
    fs.readFile(__dirname + '/chat.js',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}

io.sockets.on('connection', function (socket) {
    console.log('connected!');
    socket.on('new ninja', function (data) {
        console.log(data);
    });
});