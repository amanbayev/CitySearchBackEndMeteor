Template.mainPage.helpers({
  orgCount: function(){
    return Organizations.find({}).count();
  },
  categoryCount: function(){
    return Categories.find({}).count();
  }
});
