//This helper returns all the questions.
Template.questionList.questions = function () {
  return Questions.find({}, {sort: {createdAt: -1}});
};
//This checks the session to see whether the list of questions should be shown or not.
Template.questionList.showQuestionList = function () {
	return Session.get("showQuestionList");
};
//These events deal with toggling the visibility of the questions.
Template.questionList.events({
	'click #toggleDisplayQuestions': function () {
		Session.set("showQuestionList", true);
		Session.set("showHello", false);
	},
	'click #showAllQuestions': function () {
		Session.set("questionToShow", null);
	}
});
//This function says which question, if any, should be displayed in the detailed view.
//If no question is currently selected, the getting "questionToShow" from the session will return
//null, indicating that no question should be shown with the detailed view.
Template.questionList.questionToShow = function () {
	return Session.get("questionToShow");
};
//If just one question is to be displayed, this helper says which one it should be.
Template.questionList.showOneQuestion = function () {
	return Questions.find({_id: Session.get("questionToShow")});
};

//If a question title is clicked, that question is to be displayed in the detailed view.
Template.questionSummary.events({
	'click .questionTitle' : function (){
		Session.set("questionToShow", this._id);
	}
});
