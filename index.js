const http =require('http');

const server = http.createServer((request, response) =>{
    response.end('hello world')
}

)

server.listen(80,() => {
    console.log('server is running')
})