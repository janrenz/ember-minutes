import DS from 'ember-data';

export default DS.HoodieModel.extend({
  body: DS.attr('string'),
  timestamp: DS.attr('number'),
  todo: DS.belongsTo('todo')
});
