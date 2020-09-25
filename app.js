const express = require('express')
const app = express()
const port = 3000
const path =require('path');
app.use(express.static(__dirname + "/public/images"));

app.get('/',(req, res) => {
	res.sendFile(path.join(__dirname + '/indexViolentometro.html'))
}) 
app.listen(port, () => {
console.log('Example app listen at http://localhost:${port}')
})