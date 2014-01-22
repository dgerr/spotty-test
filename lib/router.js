Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('spotsList', {path: '/'});

  this.route('homeTemplate', {path: '/home'});
  this.route('profileTemplate', {path: '/user/:username'});

});