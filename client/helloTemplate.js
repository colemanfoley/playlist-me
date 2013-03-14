Template.hello.events({
  'click .ask' : function () {
    var question = {};
    question.text = $('#questionInput').val();
    question.user = Meteor.user();
    question.answers = [];
    question.createdAt = new Date();
    Questions.insert(question);
  },
  'click #titleText': function() {
  	Session.set("showHello", true);
  	Session.set("showQuestionList", false);
  	Session.set("questionToShow", null);
  }
});

Template.hello.show = function () {
	return Session.get("showHello");
};