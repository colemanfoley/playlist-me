//Initial set-up: specifying which fields accounts-ui should have.
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

Questions = new Meteor.Collection("questions");