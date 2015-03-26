import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('todo', {path: "/todo/:todo_id/"}, function() {
    this.route('show');
  });
});

export default Router;
