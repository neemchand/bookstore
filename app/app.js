const { userRoutes } = require('./http/routes/users');
const { booksRoutes} = require('./http/routes/books');
const { createSequilize } = require('./sequelize/models');
const path = require('path');
const sequelizePath = path.resolve('app','sequelize');
console.log(sequelizePath);
const  createApp  = ({app , express})=>{

    router = express.Router(); 
    
    router.get('/home', ( req, res)=>{
     res.send('rere');
    });
    app.use('/api/user', userRoutes({express}));
    app.use('/api/book', booksRoutes({express}));
    app.use(router);
};
module.exports = { createApp};