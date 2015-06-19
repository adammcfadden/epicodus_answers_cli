import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    save: function() {
    var dateOptions = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    var newAnswer = this.store.createRecord('answer',{
      answer: this.get('answer'),
      author: this.get('authorName'),
    });
    newAnswer.set('date', new Date());
    newAnswer.set('formattedDate', (new Date().toLocaleDateString("en-US", dateOptions)));
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
