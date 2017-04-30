import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  content: DS.attr(),
  subject: DS.belongsTo('subject', { async: true })
});
