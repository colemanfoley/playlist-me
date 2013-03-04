if (Meteor.isClient) {
  //Initial set-up: specifying which fields accounts-ui should have
  //and making the questions collection.
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });

  Questions = new Meteor.Collection("questions");
  //A helper that returns a greeting to the intro template.
  Template.hello.greet = function () {
    return "Enter a question to get music recommendations.";
  };

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
  Template.showQuestions.events({
    //This handler should be on each question, not on the whole question template?
    // 'click .answer' : function () {
    //   var answer = {};
    //   answer.user = Meteor.user();
    //   answer.text = $('.answerInput');
    //   this.
    // }
  });
  Template.showQuestions.questions = function () {
    return Questions.find({});
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Questions = new Meteor.Collection("questions");
    // code to run on server at startup
  });
}