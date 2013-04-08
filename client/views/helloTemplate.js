//The hello template displays
Template.hello.events({
  'click .ask' : function () {
    var question = {};
    question.text = $('#questionInput').val();
    question.user = Meteor.user();
    question.answers = [];
    question.createdAt = new Date();
    Questions.insert(question);
    $('#questionInput').val("");
    $('.successFlash').delay(500).fadeIn('normal', function() {
      $(this).delay(1000).fadeOut();
    });
  },
  'click #titleText': function() {
  	Session.set("showHello", true);
    Session.set("showQuestionList", false);
  	Session.set("questionToShow", null);
    Session.set("searchQuery", null);
  }
});

Template.hello.show = function () {
	return Session.get("showHello");
};