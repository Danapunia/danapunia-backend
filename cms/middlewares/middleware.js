const model = require('../../models/model');

exports.isLoggedIn = (req, res, next) => {
  if (req.session.loggedIn) {
    return next();
  } else {
    req.flash('msg_info', `Please login first`);
    res.redirect('/cms/login');
  }
}