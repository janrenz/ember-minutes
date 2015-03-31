import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['prio'],
  sortAscending: false,
  remaining: function () {
    return this.filterBy('completed', false).get('length');
  }.property('@each.completed'),
  done: function () {
    return this.filterBy('completed', true).get('length');
  }.property('@each.completed')

});
