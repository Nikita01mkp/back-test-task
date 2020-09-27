const jwt = require('jsonwebtoken');

function checkAccess(req, res, next) {


    if((req.query === undefined)){
        return res.status(405).send('Token is empty');
    }

    const token = Object.keys(req.query)[0]

    jwt.verify(token, 'SuperSecretKeyForTestTaskServer123', function (err, data) {

        if(err){
            return res.status(404).send("ERROR in access verify");
        }


        if(data.userRole === 'Admin'){
            next();
        }else{
            res.sendStatus(403);
        }

    })





}

module.exports = {
    checkAccess,
}