const { userRoutes } = require('./http/routes/users');
const { booksRoutes} = require('./http/routes/books');
const  createApp  = ({app , express }) => {

    router = express.Router(); 
    
    router.get('/home', ( req, res)=>{
     res.send('Welcome to my first Node api app');
    });
    app.use('/api/user', userRoutes({express}));
    app.use('/api/book', booksRoutes({express}));
    app.use(router);
};
module.exports = { createApp};