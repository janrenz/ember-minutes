import DS from 'ember-data';

export default DS.HoodieModel.extend({
  text: DS.attr('string'),
  description: DS.attr('string',{defaultValue: '...'}),
  completed: DS.attr('boolean', {defaultValue: false}),
  notes: DS.hasMany('note', { defaultValue: {},  }),
  prio: DS.attr('number',{defaultValue: 1}),
  assignees: DS.hasMany('assignee', { defaultValue: {}, async: true }),
  dueDate: DS.attr('date'),
  scheduledForMeeting: DS.attr('boolean', {defaultValue: true})
});
