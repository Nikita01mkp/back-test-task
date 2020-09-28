const express = require("express");
const jsonParser = express.json();
const userController = require("../controllers/user.js");
const Auth = require("../modules/auth.js");
const Router = express.Router();

userRouter.post("/", jsonParser, userController.addUser);
Router.put("/", Auth.deleteToken, userController.loginUser); /// ????????
userRouter.put("/getUser", jsonParser, userAuth.checkToken, userController.getUser);
userRouter.put("/change/", jsonParser, userAuth.checkToken,  userController.changeUser);
userRouter.put("/changePassword/", jsonParser, userAuth.checkToken,  userController.changeUserPassword);
userRouter.post("/token/refresh", jsonParser, userAuth.refreshToken);  /// move to auth
userRouter.post("/token/delete", jsonParser, userAuth.userLogout);


// Router.get('/')
// Router.post('/')
// Router.put('/')
// Router.delete('/')

module.exports = userRouter;
