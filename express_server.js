const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
})

app.get('/api/user', (request, response)=>{
    response.send({
       name: 'George',
       food: 'Donut',
       location: 'Melbourne'
    })
})

app.listen(8000)