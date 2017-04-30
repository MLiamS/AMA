import Ember from 'ember';

export default Ember.Component.extend({
  updateSubjectForm: false,
  actions: {
    update(subject, params) {
      this.sendAction('update', subject, params);
    },
  }
});
