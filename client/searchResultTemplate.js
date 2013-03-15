Template.searchResult.events({
  'click .answer' : function (e) {
    Questions.update({_id: Session.get("questionToShow")},
      {$push: {answers: {text: this.name, user:Meteor.user(), createdAt: Date.now()} } }
    );
  }
});