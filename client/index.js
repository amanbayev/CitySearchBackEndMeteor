Template.Main.onRendered(function(){
  var self = this;
  if (self.view.isRendered) {
    var body = $('body');
            body.removeClass();
            body.addClass("skin-blue sidebar-mini");

        $(function () {
            MeteorAdminLTE.run()
        });
  }
});
