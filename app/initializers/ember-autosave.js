// Using an initializer is recommended

import Ember from 'ember';
import { AutosaveProxy } from 'ember-autosave';

export function initialize() {
  AutosaveProxy.config({
    saveDelay: 50, // Save fast.
    save: function() {
      // The context here is the wrapped model
      this.mySpecialSaveMethod()
    }
  });
}

export default {
  name: 'setup-ember-autosave',
    initialize: initialize
};
