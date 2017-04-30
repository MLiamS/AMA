import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       user: this.get('user'),
       content: this.get('content'),
       subject: this.get('subject')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});
