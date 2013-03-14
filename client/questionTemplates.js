Template.question.events({
  'click .answer' : function (e) {
    var $input = $('.answerInput',$(e.toElement).parent());
    Questions.update({_id: this._id},
      {$push: {answers: {text: $input.val(), user:Meteor.user(), createdAt: Date.now()} } }
    );
  }
});

Template.showQuestions.questions = function () {
  return Questions.find({}, {sort: {createdAt: -1}});
};