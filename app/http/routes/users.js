const userRoutes= () =>{

    const router = express.Router();
    router.get('/',()=>{

        return { 'status':200, 'message':'user details'};   

    });


    router.post('/create',()=>{
        return { 'status':200, 'message':'create user'};   
    });

    return router;
}

module.exports={ userRoutes };