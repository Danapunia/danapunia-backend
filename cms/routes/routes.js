const middleware = require('../middlewares/middleware');
module.exports = app => {
  app.use('/cms', [
    require('./auth.routes'),
    middleware.isLoggedIn,
    require('./home.routes')
  ]);
  // app.get('*', (req, res, next) => {
  //   res.send('ERROR 404');
  // });
}