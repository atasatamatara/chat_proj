
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "Welcome My Chat by " + req.session.name });
};

exports.signup= function(req, res){
  res.render('signup', { title: 'signup' });
};

exports.create_signup= function(req, res){
  req.session.name = req.body.name;
  req.session.password = req.body.password;
  req.session.password2 = req.body.password2;
  res.redirect('/');
};

exports.login= function(req, res){
  res.render('login', { title: 'login' });
};

exports.logout= function(req, res){
  //res.render('logout', { title: 'logout' });
  delete req.session.name;
  delete req.session.password;
  delete req.session.password2;
  req.session.name = "My Name";
  res.redirect('/');
};

exports.count= function(req, res){
  //res.render('count', { title: 'count' });
  res.send('user' + req.params.id);
};
