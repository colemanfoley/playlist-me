Template.searchResult.events({
  'click .answer' : function (e) {
    console.log(this.key);
    Questions.update({_id: Session.get("questionToShow")},
      {$push: {answers: {title: this.name, artist: this.artist, key: this.key, user:Meteor.user(), createdAt: Date.now()} } }
    );
  }
});