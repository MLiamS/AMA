import Ember from 'ember';

export default Ember.Component.extend({
  addNewSubject: false,
  actions: {
    subjectFormShow() {
      this.set('addNewSubject', true);
    },

    saveSubject() {
          var params = {
            owner: this.get('owner'),
            title: this.get('title'),
          };
          this.set('addNewSubject', false);
          this.sendAction('saveSubject', params);
        }
      }
    });
// insert code to save to db
