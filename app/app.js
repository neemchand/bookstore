const { userRoutes } = require('.http/routes/user');
//const { booksRoutes} = require('.http/routes/book')

const { createApp } = ({app , express})=>{

    router = express.Router(); 
    router.use('api/user',userRoutes);
    
};
module.exports ={ createApp};