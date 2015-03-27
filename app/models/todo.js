import DS from 'ember-data';

export default DS.HoodieModel.extend({
  text: DS.attr('string'),
  description: DS.attr('string',{defaultValue: '...'}),
  completed: DS.attr('boolean', {defaultValue: false}),
  notes: DS.hasMany('note', { async: true })
});
