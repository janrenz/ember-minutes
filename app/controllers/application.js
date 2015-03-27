import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createTodo: function () {
      self = this;
      var record = this.store.createRecord('todo', {text: 'New item'});

      record.save().then(function () {
        self.transitionToRoute('todo.show', record.id);
      }, function (err) {
        ctrl.setFlash(err.message);
      });
    }
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
