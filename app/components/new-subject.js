import Ember from 'ember';

export default Ember.Component.extend({
  addNewSubject: false,
  actions: {
    subjectFormShow() {
      this.set('addNewSubject', true);
    }
  }
});
// insert code to save to db
