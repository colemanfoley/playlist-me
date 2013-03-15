//Initial set-up: specifying which fields accounts-ui should have.
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Questions = new Meteor.Collection("questions");
SearchResultsCollection = new Meteor.Collection("searchResultsCollection");
Session.set("showHello", true);
Session.set("showQuestionList", true);
Session.set("questionToShow", null);
Session.set("currentAnswer", null);
Session.set("currentSearchQuery", null);