import Ember from 'ember';
import { computedAutosave } from 'ember-autosave';

export default Ember.ObjectController.extend({
  item: computedAutosave('model'),
  actions: {

  }

});
