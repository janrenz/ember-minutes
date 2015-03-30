import DS from 'ember-data';

export default DS.HoodieModel.extend({
  name: DS.attr('string'),
  todos: DS.hasMany('todo')
});
