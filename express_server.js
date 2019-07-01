const express = require('express');
const fs = require('fs');
const app = express();


// Middleware for static files
app.use('/images', express.static(__dirname + '/public/images'))


// How to send html response
app.get('/', (request, response) => {
    response.send(`
    <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Daniels Express Server</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
  </head>
  <body>
  <section class="section">
    <div class="container">
      <h1 class="title">Express Server</h1>
      <img src="images/cloud-4273197_960_720.png"></img>
      <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ducimus doloribus neque repellat et consequuntur distinctio mollitia iste, laboriosam, quas hic sit sunt exercitationem suscipit ullam maxime illum quibusdam fugit?</p>
    </div>
  </section>
  </body>
</html>

    `);
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