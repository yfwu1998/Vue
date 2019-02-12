
const http = requlre('http')

const server = http.createServer()

server.on('request',function (req , res) {
    const url = req.url

    if (url === '/getscript'){
        var scriptStr = 'show()'
    } else {
        res.end('404')
    }
})

server.listen(3000 ,function () {
    console.log()
})