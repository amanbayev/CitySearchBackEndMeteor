Template.Categories.helpers({
  isAdding: function(){
    return Session.get('isAddingCategory');
  },
  Categories: function(){
    return Categories.find({});
  },
  addOne: function(num){
    return num + 1;
  }
});

Template.Categories.events({
  "click #cancelNewCategoryItem": function(e, t){
     e.preventDefault();
     Session.set('isAddingCategory',false);
  },
  "click #addNewCategoryBtn": function(e,t){
    e.preventDefault();
    Session.set('isAddingCategory',true);
  },
  "click #submitNewCategoryItem": function(e,t){
    e.preventDefault();
    var categoryName = t.find('#categoryNameInput').value;
    if (categoryName.length > 0) {
      var categoryJSON = {};
      categoryJSON.name = categoryName;
      Meteor.call("addNewCategory", categoryJSON);
      toastr.info(categoryName + " категория добавлена!", "Новая категория");
      t.find("#categoryNameInput").value = '';
      Session.set('isAddingCategory',false);
    }
  }
});
