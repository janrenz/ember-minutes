import Ember from 'ember';
export default Ember.Route.extend({
    model: function(param, transition) {
    return this.store.find('todo', transition.params.todo.todo_id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
