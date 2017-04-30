import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  title: DS.attr(),
  comments: DS.hasMany('comment', { async: true })

});
