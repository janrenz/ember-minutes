// Using an initializer is recommended

import Ember from 'ember';
import { AutosaveProxy } from 'ember-autosave';

export function initialize() {
  AutosaveProxy.config({
    saveDelay: 50 // Save fast.
  });
}

export default {
  name: 'setup-ember-autosave',
    initialize: initialize
};
