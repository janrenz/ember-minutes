import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['completed', 'prio'],
  sortAscending: true,
  actions: {
    createTodo: function () {
      var self = this;
      var record = this.store.createRecord('todo', {text: 'New item'});
      record.save().then(function () {
        self.transitionToRoute('todo.show', record.id);
      }, function (err) {
        self.setFlash(err.message);
      });
    }
  },

  findNext:function(post){
    var posts = this.get('arrangedContent');
    var currentIndex = posts.indexOf(post);
    return posts.objectAt(currentIndex+1);
  },
  findPrev:function(post){
    var posts = this.get('arrangedContent');
    var currentIndex = posts.indexOf(post);
    return  posts.objectAt(currentIndex-1);
  },
  hasNext:function(post){
    return this.get('arrangedContent').indexOf(post)<this.get('arrangedContent').get('length')-1;
  },
  hasPrev:function(post){
    return this.get('arrangedContent').indexOf(post)>0;
  },
  flash:  null,
  user:   Ember.Object.create({
    email: null,
    password: null
  }),

  setFlash: function(message) {
    this.set('flash', message);

    Ember.run.later(this, function() {
      this.set('flash', null);
    }, 3000);
  }
});
