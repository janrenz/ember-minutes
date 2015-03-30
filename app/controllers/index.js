import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['completed'],//updatedAt
  sortAscending: false,
  remaining: function () {
    return this.filterBy('completed', false).get('length');
  }.property('@each.completed')

});
