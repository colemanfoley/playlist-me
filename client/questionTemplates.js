Template.question.events({
	'click .questionTitle' : function (){
		console.log("This is the id of the clicked-on question: " + this._id);
		Session.set("questionToShow", this._id);
	},
  'click .answer' : function (e) {
    var $input = $('.answerInput',$(e.toElement).parent());
    Questions.update({_id: this._id},
      {$push: {answers: {text: $input.val(), user:Meteor.user(), createdAt: Date.now()} } }
    );
  }
});

Template.questionList.questions = function () {
  return Questions.find({}, {sort: {createdAt: -1}});
};

Template.questionList.showQuestionList = function () {
	return Session.get("showQuestionList");
};

Template.questionList.events({
	'click #toggleDisplayQuestions': function () {
		Session.set("showQuestionList", true);
		Session.set("showHello", false);
	}
});

Template.questionList.questionToShow = function () {
	return Session.get("questionToShow");
};

Template.questionList.showOneQuestion = function () {
	return Questions.find({_id: Session.get("questionToShow")});
};