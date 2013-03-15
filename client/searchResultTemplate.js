Template.searchResult.events({
  'click .answer' : function (e) {
    Questions.update({_id: Session.get("questionToShow")},
      {$push: {answers: {title: this.name, artist: this.artist, key: this.key, user:Meteor.user(), createdAt: Date.now()} } }
    );
    Session.set("currentSearchQuery", null);
  }
});

Template.searchResult.showSearchResults = function () {
	return Session.get("currentSearchQuery");
};