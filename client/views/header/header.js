Template['header'].helpers({
});

Template['header'].events({
  'click #signup': function() {
    Router.go('signup');
  },
  'click #login': function() {
    Router.go('login');
  }
});
