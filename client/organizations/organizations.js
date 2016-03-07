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
    // console.log(cCat);
    return cCat.name;
  }
});

Template.Organizations.events({
  "change #OrganizationNameInput": function(e,t){
    var inputField = t.find("#OrganizationNameInput").value;
    if (inputField.length > 0) {
      Session.set("OrganizationHasName",true);
    }
  },
  "change #selectFileInput": function(e,t){
    var files = e.currentTarget.files;
    return Cloudinary.upload(files, {
      folder: "secret",
      type: "private"
    }, function(err,res){
      console.log('upload error: ' + err);
      Session.set('organizatoinImageObject', res);
      Meteor.call("c.get_download_url", res.public_id, function(err, download_url) {
        console.log("Upload Error: " + err);
        Session.set('organizationImageUrl', download_url);

        $("#submitNewOrganizationItem").removeClass("disabled");
        return console.log("download_url: " + download_url);
      });
      return console.log('upload result: ' + res.public_id);
    });
  },
  "click #cancelNewOrganizationItem": function(e, t){
    e.preventDefault();
    Session.set('isAddingOrganization',false);
    Session.set('organizationImageUrl', null);
    Session.set('organizatoinImageObject', null);
  },
  "click #addNewOrganizationBtn": function(e,t){
    e.preventDefault();
    Session.set('organizationImageUrl', null);
    Session.set('organizatoinImageObject', null);
    Session.set('isAddingOrganization',true);
  },
  "click #submitNewOrganizationItem": function(e,t){
    e.preventDefault();
    var isOk = false;
    isOk = Session.get("OrganizationHasName");
    if (!isOk) {
      toastr.error('Введите название организации', "Новая организация");
      return;
    }
    var organizationName = t.find('#OrganizationNameInput').value;
    var catSelect = t.find('#categorySelect');
    var orgImageObj = Session.get('organizatoinImageObject');
    var catId = catSelect[catSelect.selectedIndex].id;
    // console.log(catSelect);
    // console.log(catId);
    var imgUrl = Session.get('organizationImageUrl');
    if (imgUrl == null) {
      console.log('pic is null');

      return;
    }
    if (organizationName.length > 0) {
      var orgJSON = {};
      orgJSON.name = organizationName;

      console.log(imgUrl);
      orgJSON.imageUrl = imgUrl;
      orgJSON.imageObject = orgImageObj;
      orgJSON.category = catId;
      Meteor.call("addNewOrganization", orgJSON);
      toastr.info(organizationName + " организация добавлена!", "Новая организация");
      t.find("#OrganizationNameInput").value = '';
      Session.set('organizationImageUrl', null);
      Session.set("OrganizationHasName",false);
      Session.set('isAddingOrganization',false);
    }
  }
});
