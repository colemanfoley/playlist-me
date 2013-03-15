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
	},
	'click #showAllQuestions': function () {
		Session.set("questionToShow", null);
	}
});

Template.questionList.questionToShow = function () {
	return Session.get("questionToShow");
};

Template.questionList.showOneQuestion = function () {
	return Questions.find({_id: Session.get("questionToShow")});
};