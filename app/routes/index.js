import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('subject');
  },

    actions: {
      saveSubject(params) {
        var newSubject = this.store.createRecord('subject', params);
        newSubject.save();
        this.transitionTo('index');
      }

    }

});
