const booksRoutes = ({express})=> {

    const router = express.Router();

    router.get('/', (req, res) =>{
        res.json({'message':'show all books', status:200});

    });

    router.post('/store',(req, res)=>{
        res.json({'status':200, 'message':'new book added'});
    });


return router;
};
module.exports = { booksRoutes};