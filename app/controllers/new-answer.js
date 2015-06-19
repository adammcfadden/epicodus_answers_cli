import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
    var newAnswer = this.store.createRecord('answer',{
      answer: this.get('answer'),
      author: this.get('authorName'),
    });
    newAnswer.save();

    var question = this.get('controllers.question.model');
    question.get('answers').pushObject(newAnswer);
    question.save();


    this.set('answer', null);
    this.set('authorName', null);

    this.transitionToRoute('question', question.id);
    }
  }
});
