if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to spotty-test.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

Template.profileTemplate.helpers({
  username: function() {
    console.log(Meteor.user().profile.name);
  }
  });

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
