const { userRoutes } = require('./http/routes/users');
const { booksRoutes} = require('./http/routes/books');
<<<<<<< HEAD
const  createApp  = ({app , express }) => {
=======
const { createSequilize } = require('./sequelize/models');
const path = require('path');
const sequelizePath = path.resolve('app','sequelize');
console.log(sequelizePath);
const  createApp  = ({app , express})=>{
>>>>>>> 8a2bec8acc1108391b8db2d0dc1b5e6fd62b3a50

    router = express.Router(); 
    
    router.get('/home', ( req, res)=>{
     res.send('rere');
    });
    app.use('/api/user', userRoutes({express}));
    app.use('/api/book', booksRoutes({express}));
    app.use(router);
};
module.exports = { createApp};