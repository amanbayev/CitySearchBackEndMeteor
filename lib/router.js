FlowRouter.route('/',{
  action: function(){
    BlazeLayout.render('Main', {content: 'mainPage'});
  }
});

FlowRouter.route('/testing',{
  action: function(){
    BlazeLayout.render('Main', {content: 'Testing'});
  }
});

FlowRouter.route('/categories', {
  action: function(){
    BlazeLayout.render('Main', {content: 'Categories'});
  }
});

FlowRouter.route('/organizations', {
  action: function(){
    BlazeLayout.render('Main', {content: 'Organizations'});
  }
});
