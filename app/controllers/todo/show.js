import Ember from 'ember';
import { computedAutosave } from 'ember-autosave';

export default Ember.Controller.extend({
  item: computedAutosave('model'),
  needs: ['application'],
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
      var note =this.model.get('notes').createRecord( {body: 'New note'});
      note.save();
      this.model.save();

    }
  }

});
