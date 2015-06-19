import Ember from 'ember';

export default Ember.Controller.extend({
  notEditing: true,
  actions: {
    edit: function(){
      this.set('notEditing', false);
    },
    delete: function(){
      if (confirm('Do you really want to delete this question?')) {
        this.get('model').destroyRecord();
      }
      this.transitionToRoute('questions');
    },
    save: function(){
      var dateOptions = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
      };
      this.get('model').set('question', this.get('question'));
      this.get('model').set('author', this.get('author'));
      this.get('model').set('description', this.get('description'));
      this.get('model').set('date', new Date());
      this.get('model').set('formattedDate', (new Date().toLocaleDateString("en-US", dateOptions)));
      this.get('model').save();
      this.set('notEditing', true);
    },
    showAnswer: function(answer) {
     this.set('currentAnswer', answer);
     Ember.$("#myModal").modal('show');
    },
    deleteAnswer: function(currentAnswer) {
      currentAnswer.destroyRecord();
      Ember.$("#myModal").modal('hide');
    }
  }
});
