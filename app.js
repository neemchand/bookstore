const express = require('express');
const app = express();

app.use('/public',express.static('public'));

const { createApp } = require('./app/app'); 
const { createSequelize } = require('./app/sequelize/models/index');
const seqConnection  = createSequelize();
createApp({ app, express });
//console.log(seqConnection);


const server= app.listen(8080,function(){

console.log('running server on port '+server.address().port);
});
