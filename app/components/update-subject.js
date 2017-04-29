import Ember from 'ember';

export default Ember.Component.extend({
  updateSubjectForm: false,
  actions: {
    updateSubjectForm() {
      this.set('updateSubjectForm', true);
    },
    update(subject) {
      var params = {
        owner: this.get('owner'),
        title: this.get('title'),
      };
      this.set('updateSubjectForm', false);
      this.sendAction('update', subject, params);
    }
  }
});
