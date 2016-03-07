Template.Organizations.helpers({
  isAdding: function(){
    return Session.get('isAddingOrganization');
  },
  Categories: function(){
    return Categories.find({});
  },
  Organizations: function(){
    return Organizations.find({});
  },
  addOne: function(num){
    return num + 1;
  },
  getCategoryById: function(cId){
    var cCat = Categories.findOne({_id: cId});
    console.log(cCat);
    return cCat.name;
  }
});

Template.Organizations.events({
  "click #cancelNewOrganizationItem": function(e, t){
     e.preventDefault();
     Session.set('isAddingOrganization',false);
  },
  "click #addNewOrganizationBtn": function(e,t){
    e.preventDefault();
    Session.set('isAddingOrganization',true);
  },
  "click #submitNewOrganizationItem": function(e,t){
    e.preventDefault();
    var organizationName = t.find('#OrganizationNameInput').value;
    var catSelect = t.find('#categorySelect');
    var catId = catSelect[catSelect.selectedIndex].id;
    console.log(catSelect);
    console.log(catId);
    if (organizationName.length > 0) {
      var orgJSON = {};
      orgJSON.name = organizationName;
      orgJSON.category = catId;
      Meteor.call("addNewOrganization", orgJSON);
      toastr.info(organizationName + " организация добавлена!", "Новая организация");
      t.find("#OrganizationNameInput").value = '';
      Session.set('isAddingOrganization',false);
    }
  }
});
