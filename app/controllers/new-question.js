import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(){
    var dateOptions = {
      weekday: "long", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    var newQuestion = this.store.createRecord('question',{
      question: this.get('question'),
      author: this.get('author'),
      description: this.get('description')
    });
    newQuestion.set('date', new Date());
    newQuestion.set('formattedDate', (new Date().toLocaleDateString("en-US", dateOptions)));
    newQuestion.save();
    this.transitionToRoute('questions');

    this.set('question', null);
    this.set('author', null);
    this.set('description', null);
    }
  }
});
