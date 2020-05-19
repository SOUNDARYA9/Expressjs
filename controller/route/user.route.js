module.exports =function(router){
    const user = require('../user');
    router.post('/user/abc',user.addUser);
    router.get('/user/listuser',user.listUser);
    router.delete('/user/deleteUser',user.deleteUser);
    router.get('/user/findUser',user.findUser);
    router.post('/user/updateUser',user.updateUser);
    return router;
}