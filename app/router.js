import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('questions', {path: '/'}, function() {
    this.resource('new-question');
  });
  this.resource('question', {path: ':question_id'}, function() {
    this.resource('new-answer');
  });
});

export default Router;
