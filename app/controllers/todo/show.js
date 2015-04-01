import Ember from 'ember';
import { computedAutosave } from 'ember-autosave';

export default Ember.Controller.extend({
  item: computedAutosave('model'),
  needs: ['application'],
  priorities: [
    {name: "Low", value: 5},
    {name: "Normal", value:3},
    {name: "High", value: 1}
  ],
  allItems: Ember.computed.alias('controllers.application.arrangedContent'),
  hasNext:function(){
    return this.get('controllers.application').hasNext(this.get('model'));
  }.property('content'),
  hasPrevious:function(){
    return this.get('controllers.application').hasPrev(this.get('model'));
  }.property('content'),
  isTaskDone: function(){
    return this.get('todo.completed');
  }.property('todo.completed'),
  actions:{
    next : function(){
      this.transitionToRoute('todo.show',this.get('controllers.application').findNext(this.get('model')));
    },
    setDone: function() {
      this.model.set('completed', true);
    },
    setUndone: function() {
      this.model.set('completed', false);
    },
    scheduleForMeeting: function(todo) {
      todo.set('scheduledForMeeting', true);
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
      this.model.set('scheduledForMeeting', false);
      this.model.save();
    }
  }

});
