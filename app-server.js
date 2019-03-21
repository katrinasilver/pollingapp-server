const express = require('express')
const app = express()

//serve files from public folder
app.use(express.static('./public'))
app.use(express.static('./node_modules/bootstrap/dist'))

const port = 3000
app.listen(port)
console.log(`Polling server is running at ${port}`)