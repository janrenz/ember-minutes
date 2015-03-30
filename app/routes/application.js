import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  },

  actions: {


    signIn: function() {
      var ctrl     = this.get('controller');
      var email    = ctrl.get('user.email');
      var password = ctrl.get('user.password');

      this.accountService.signIn(email, password).catch(function(err) {
        ctrl.setFlash(err.message);
      });
    },

    signUp: function() {
      var ctrl     = this.get('controller');
      var email    = ctrl.get('user.email');
      var password = ctrl.get('user.password');

      this.accountService.signUp(email, password).catch(function(err) {
        ctrl.setFlash(err.message);
      });
    },

    signOut: function() {
      var ctrl     = this.get('controller');
      this.accountService.signOut().catch(function(err) {
        ctrl.setFlash(err.message);
      });
      duocument.location.href= '/';
    }
  }
});
