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
