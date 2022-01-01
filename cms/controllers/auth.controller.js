const Model = require('../../models/model');

exports.loginIndex = async (req, res, next) => {
  if (req.session.loggedIn === true) {
    res.redirect('/cms');
  } else {
    res.render('auth/login');
  }
}

exports.login = async (req, res, next) => {
  const userLogin = await Model.Badan.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  });

  if (userLogin) {
    req.session.loggedIn = true;
    req.session.userId = userLogin.id;

    res.redirect('/cms');
  } else {
    req.flash('msg_info', 'Username atau Password salah');
    res.redirect('/cms/login');
  }
}