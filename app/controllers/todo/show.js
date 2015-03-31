import Ember from 'ember';
import { computedAutosave } from 'ember-autosave';

export default Ember.Controller.extend({
  item: computedAutosave('model'),
  needs: ['application'],
  priorities: [
    {name: "Low", value: 1},
    {name: "Normal", value: 2},
    {name: "High", value: 3}
  ],
  allItems: Ember.computed.alias('controllers.application.model'),
  hasNext:function(){
    return this.get('controllers.application').hasNext(this.get('model'));
  }.property('content'),
  hasPrevious:function(){
    return this.get('controllers.application').hasPrev(this.get('model'));
  }.property('content'),
  actions:{
    next : function(){
      this.transitionToRoute('todo.show',this.get('controllers.application').findNext(this.get('model')));
    },
    toggleTodo: function(todo) {
      todo.set('completed', !todo.get('completed'));
      //todo.save();
    },
    prev: function(){
      this.transitionToRoute('todo.show',this.get('controllers.application').findPrev(this.get('model')));
    },
    destroyTodo: function() {
      this.model.destroyRecord();
      this.transitionToRoute('index');
    },
    addNote: function(){
      var newNote = this.store.createRecord("note", {body: "new Note"});
      newNote.save();
      this.model.get("notes").pushObject(newNote);
      this.model.save();
    }
  }

});
