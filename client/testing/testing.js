Template.Testing.helpers({
  isAdding: function(){
    return Session.get('isAdding');
  },
  Test: function(){
    return Test.find({});
  },
  addOne: function(num){
    return num+1;
  }
});

Template.Testing.events({
  "click #addNewTestItemBtn": function(e, t){
     e.preventDefault();
     Session.set('isAdding',true);
  },
  "click #cancelNewItemFormBtn": function(e,t){
    e.preventDefault();
    Session.set('isAdding',false);
  },
  "click #submitNewItemFormBtn": function(e,t){
    e.preventDefault();
    var itemName = t.find('#itemNameFormItem').value;
    if (itemName.length > 0) {
      var itemJSON = {};
      itemJSON.name = itemName;
      Meteor.call("addTestItem", itemJSON);
      toastr.success(itemName + " добавлен!", "Новый элемент");
      t.find("#itemNameFormItem").value = '';
      Session.set('isAdding',false);
    }
  }
});
