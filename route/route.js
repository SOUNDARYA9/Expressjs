module.exports = function (express) {   
    const router = express.Router()     
     require('../controller/route/user.route')(router);  
 return router;
}