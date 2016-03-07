Organizations = new Mongo.Collection('organizations');
Organizations.allow({
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

Meteor.publish('organizations', function(){
  return Organizations.find();
})

Meteor.methods({
  addNewOrganization:function(orgJSON){
    orgJSON.createdAt = Date.now();
    console.log('adding organization item: ' + orgJSON);
    Organizations.insert(orgJSON);
  }
});
