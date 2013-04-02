//Initial set-up: specifying which fields accounts-ui should have.
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

//Creating the collections.
Questions = new Meteor.Collection("questions");
SearchResultsCollection = new Meteor.Collection("searchResultsCollection");

//These session variables keep track of whether various DOM elements should be displayed or not.
Session.set("showHello", true);
Session.set("showQuestionList", false);
Session.set("questionToShow", null);
Session.set("currentAnswer", null);
Session.set("currentSearchQuery", null);
