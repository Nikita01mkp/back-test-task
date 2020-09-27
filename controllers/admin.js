const User = require('../models/user.js');
const Auth = require('../models/auth.js');

function getUserList(req, res) {

  User.find({}, function (err, users) {

    if (err) {
      return res.status(404).send('Error of get users');
    }

    const masObj = [];

    for (let i = 0; i < users.length; i++) {
      masObj[i] = {
        login: users[i].login,
        _id: users[i]._id,
      }
    }

    return res.status(200).send(masObj);
  });

}

function deleteUser(req, res) {

  const id = req.body.userId;

  User.findOne({_id: id}, function (err, user) {

    if (err) {
      return res.status(404).send(err);
    }

    Auth.findOneAndDelete({user_id: id}, function (err) {
      if (err) {
        return res.status(404).send("Error of delete tokens");
      }
    })

    user.remove();
    return res.status(200).send('success');

  });

}

module.exports = {
  getUserList,
  deleteUser,
};