const { userRoutes } = require('./http/routes/user');
//const { booksRoutes} = require('.http/routes/book')

const { createApp } = ({app , express})=>{

    router = express.Router(); 
    app.use('/api/user', userRoutes);
    app.use(router);
};
module.exports ={ createApp};