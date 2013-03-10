//Handlers for the hello template.
Template.hello.events({
  'click .ask' : function () {
    // template data, if any, is available in 'this'
    var question = {};
    question.text = $('#questionInput').val();
    question.user = Meteor.user();
    question.answers = [];
    Questions.insert(question);
  }
});

//Handlers for the showQuestions template.
Template.question.events({
  'click .answer' : function () {
    var answer = {};
    answer.user = Meteor.user();
    answer.text = $('.answerInput').val();
    this.answers.push(answer);
    Questions.update({_id: this._id},
      {$push: {answers: {text: $('.answerInput').val(), user:Meteor.user() } } }
    );
  },

  'click .showAnswers' : function () {
    $('.answersList').show();
  }
});

Template.showQuestions.questions = function () {
  return Questions.find({});
};