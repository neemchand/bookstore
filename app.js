const express = require('express');
const app = express();

//app.use('/public',express.static('public'));

const { createApp } = require('./app/app'); 

createApp({ app, express });



const server = app.listen(8080,function(){
console.log('running server on port '+server.address().port);
});
