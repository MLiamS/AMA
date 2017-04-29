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
      },

      update(subject, params) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            subject.set(key,params[key]);
          }
        });
        subject.save();
        this.transitionTo('index');
      },
    }
});
