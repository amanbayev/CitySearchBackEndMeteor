Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
Router.route('/', function(){
  this.render('mainPage');
});

Router.route('/testing', function(){
  this.render('Testing');
});
