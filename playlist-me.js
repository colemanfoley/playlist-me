if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });

  Questions = new Meteor.Collection("questions");

  Template.hello.greet = function () {
    return "Enter a question to get music recommendations.";
  };

  Template.hello.events({
    'click .btn' : function () {
      // template data, if any, is available in 'this'
      var question = {};
      question.text = $('#questionInput').val();
      question.user = Meteor.user();
      console.log(question);
      console.log(Questions);
      Questions.insert(question);
      console.log(Questions.find());
    }
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