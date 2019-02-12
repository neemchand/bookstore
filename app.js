const express = require('express');
const app = express();

app.use('/public',express.static('public'));

const { createApp } = require('./app/app'); 
const { createSequelize } = require('./app/sequelize/models/index');
const seqConnection  = createSequelize();
createApp({ app, express });
//console.log(seqConnection);


<<<<<<< HEAD
const server= app.listen(8080,function(){

=======
const server = app.listen(8080,function(){
>>>>>>> 8a2bec8acc1108391b8db2d0dc1b5e6fd62b3a50
console.log('running server on port '+server.address().port);
});
