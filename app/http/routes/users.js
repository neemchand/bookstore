const userRoutes= ({express}) => {

    const router = express.Router();
    router.get('/',(req, res)=>{

        res.json( { 'status':200, 'message':'user details'});   

    });
    router.get('/test',(req,res)=>{

        res.json({ 'status':200, 'message':'user details'}); 

    });


    router.post('/create', (req, res)=> {
        res.json({ 'status':200, 'message':'create user'});   
    });

    return router;
};

module.exports = { userRoutes };