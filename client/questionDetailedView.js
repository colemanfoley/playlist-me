Template.question.events({
	//When the user clicks on a question's title in the questionsList view, the user is brought
	//to the individual question view.
	'click .questionTitle' : function (){
		Session.set("questionToShow", this._id);
	},

	//Sends the search query up to the Rdio API and puts the results in the search results collection.
  'click .search' : function (e) {
    var queryToSend = $('.searchInput').val();
    var searchResults = "";
    SearchResultsCollection.remove({query: queryToSend});
    Meteor.http.post("http://playlist-me-helper.nodejitsu.com:80", {data: {key: queryToSend, queryType: "search"}},
    	function(error, result){
	      if(error){
	        console.log(error);
	      }
	      searchResults = JSON.parse(result.content);
	      var d = {
	        query: queryToSend,
	        result: searchResults
	      };
	      SearchResultsCollection.insert(d);
	      Session.set("searchQuery", queryToSend);
	      Session.set("currentSearchQuery", queryToSend);
    	}
    );
  }
});
//This helper returns the search results for the current query.
Template.question.searchResults = function () {
	var currentSearchQuery = Session.get("searchQuery");
	var result = SearchResultsCollection.find({
		query: currentSearchQuery
	})
	return SearchResultsCollection.find({query: Session.get("searchQuery")});
};