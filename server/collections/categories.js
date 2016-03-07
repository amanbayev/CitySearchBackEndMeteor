Categories = new Mongo.Collection('categories');
Categories.allow({
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

Meteor.publish('categories', function(){
  return Categories.find();
})

Meteor.methods({
  addNewCategory:function(categoryJSON){
    categoryJSON.createdAt = Date.now();
    console.log('adding category item: ' + categoryJSON);
    Categories.insert(categoryJSON);
  }
});
