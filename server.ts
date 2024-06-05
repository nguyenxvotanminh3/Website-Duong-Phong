const express = require('express') // Sử dụng framework express
const next = require('next') // Include module next
// import express from  'express';
// import next from 'next';
const dotenv = require('dotenv')

dotenv.config()

const port = parseInt(process.env.PORT, 10) || 3000
const hostname = process.env.HOST_NAME
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();

    // Nếu các bạn muốn các routing tự động liến kết đến route files giống với cấu trúc của Nextjs thì chỉ cần thêm 3 dòng bên dưới
    // https://nextjs.org/docs/routing/introduction
    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://${hostname}:${port}`)
    })
})