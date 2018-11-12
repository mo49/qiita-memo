var http = require('http')
var fs = require('fs')
var Io = require('socket.io')

var server = http.createServer(function(req, res) {
    var source = fs.createReadStream('io.html')
    res.writeHead(200)
    source.pipe(res)
})

var io = Io(server)

let counter = 0

io.sockets.on('connection', (socket) => {
    io.emit('change', {
        count: counter + 1,
    })

    socket.on('join', () => {
        counter++
        socket.broadcast.emit('change', {
            count: counter
        })
    })

    socket.on('disconnect', () => {
        counter--
        socket.broadcast.emit('change', {
            count: counter
        })
    })

})

server.listen(3000)