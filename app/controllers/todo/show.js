import Ember from 'ember';
import { computedAutosave } from 'ember-autosave';

export default Ember.ObjectController.extend({
  item: computedAutosave('model'),
  needs: ['application'],
  allItems: Ember.computed.alias('controllers.application.model'),
  actions: {
    destroyTodo: function() {
      this.model.destroyRecord();
      this.transitionToRoute('index');
    },
  }

});
