const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const urlEncodeParser = bodyParser.urlencoded({extended: false})


// [NOTE] Creating a basic logger
const logger = (request, response, next) => {
    console.log(`${request.protocol}://${request.get('host')}${request.originalUrl} [${new Date().toISOString()}]`)
    next()
} 

app.use(logger);

// [NOTE] Middleware for static files
app.use(express.static(path.join(__dirname,'public')));

// [NOTE] Member data (hardcoded)
const members = [
                    {name: "toby goods", id: 1, status: false},
                    {name: "daniel corcoran", id:2, status: true},
                    {name: "sally sun", id: 3, status: false}
                ]

// [NOTE] Member route, returns json response representing members data
app.get('/api/member/list', (request, response) => {
    response.json({
        members: members
    })
})

// [NOTE] User form route
app.get('/user', (request, response) => {
    let HTML = fs.readFileSync(`${__dirname}/templates/form.html`);
    response.send(`${HTML}`);

})

app.post('/enter-user', urlEncodeParser, (request, response) => {
    const name = request.body.name;
    const color = request.body.color;
    console.log(name, color);
    app.removeAllListene
})


// [NOTE] How to send html response
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
        <p class="subtitle">Using static assets</p>
        <img style="max-height: 500px;" src="images/cloud-4273197_960_720.png"></img>
        <p class="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ducimus doloribus neque repellat et consequuntur distinctio mollitia iste, laboriosam, quas hic sit sunt exercitationem suscipit ullam maxime illum quibusdam fugit?</p>
        </div>
    </section>
    </body>
    </html>

    `);
})


// [NOTE] How to send json response
app.get('/api/user', (request, response)=>{
    response.send({
       name: 'George',
       food: 'Donut',
       location: 'Melbourne'
    })
})

// [NOTE] How to retrieve params and query strings
app.get('/api/user/:id', (request, response) => {
    let id = request.params.id;
    let category = request.query.category;

    response.send({
        category: category,
        id: id
    })

})

// [NOTE] Conditional port for prod/dev environments

const PORT = process.env.PORT || 8000

app.listen(8000, () => console.log(`Server started on port ${PORT}`))