// npm install express morgan
// npm i mocha supertest
const express = require('express');
const router = require('./router/users');

//*> from terminal:  npm test 

const app = express();
app.use(express.json());

app.use('/users', router);


app.listen( 3400, () => {
    console.log("Server running on port 3400");
});


module.exports = app;

