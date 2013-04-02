//Clicking answer adds the song to the answers array on this question. Each answer in the array has the artist,
//song title, user, and create date stored on it. The Rdio key is also stored on it, so that when someone clicks
//play on this answer, the correct song will be played.

Template.searchResult.events({
  'click .answer' : function (e) {
    Questions.update({_id: Session.get("questionToShow")},
      {$push: {answers: {title: this.name, artist: this.artist, key: this.key, user:Meteor.user(), createdAt: Date.now()} } }
    );
    Session.set("currentSearchQuery", null);
  }
});
//This helper indicates which search query's results should be displayed currently.
Template.searchResult.showSearchResults = function () {
	return Session.get("currentSearchQuery");
};