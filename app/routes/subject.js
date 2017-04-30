import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('subject', params.subject_id);
  },
  actions: {
    update(subject, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          subject.set(key,params[key]);
        }
      });
      subject.save();
      this.transitionTo('index');
    },
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var subject = params.subject;
      subject.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return subject.save();
      });
      this.transitionTo('subject', subject);
    }

  }
});
