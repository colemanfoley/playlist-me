//Handlers for the hello template.
Template.hello.events({
  'click .ask' : function () {
    var question = {};
    question.text = $('#questionInput').val();
    question.user = Meteor.user();
    question.answers = [];
    question.createdAt = new Date();
    Questions.insert(question);
  }
});

//Handlers for the showQuestions template.
Template.question.events({
  'click .answer' : function (e) {
    var answer = {};
    answer.user = Meteor.user();
    var $input = $('.answerInput',$(e.toElement).parent());
    answer.text = $input.val();
    this.answers.push(answer);
    Questions.update({_id: this._id},
      {$push: {answers: {text: $input.val(), user:Meteor.user() } } }
    );
  },

  'click .showAnswers' : function () {
    $('.answersList').show();
  }
});

Template.showQuestions.questions = function () {
  return Questions.find({}, {sort: {createdAt: -1}});
};