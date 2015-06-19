import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr('string'),
  author: DS.attr('string'),
  date: DS.attr('date'),
  formattedDate: DS.attr('string'),
  question: DS.belongsTo('question', {async: true})
});
