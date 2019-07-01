const express = require('express');
const fs = require('fs');
const app = express();


// Middleware for static files
app.use('/images', express.static(__dirname + '/public/images'))


// How to send html response
app.get('/', (request, response) => {
    response.send(`<h1>Express Server</h1>
    <img src="images/cloud-4273197_960_720.png"></img>`);
})


// How to send json response
app.get('/api/user', (request, response)=>{
    response.send({
       name: 'George',
       food: 'Donut',
       location: 'Melbourne'
    })
})

// How to retrieve params and query strings
app.get('/api/user/:id', (request, response) => {
    let id = request.params.id;
    let category = request.query.category;

    response.send({
        category: category,
        id: id
    })

})


app.listen(8000)