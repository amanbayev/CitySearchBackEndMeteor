Test = new Mongo.Collection("test");
Test.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Meteor.publish('test', function(){
  return Test.find();
})

Meteor.methods({
  addTestItem:function(testItemJSON){
    testItemJSON.createdAt = Date.now();
    console.log('adding test item: '+testItemJSON);
    Test.insert(testItemJSON);
  }
});
