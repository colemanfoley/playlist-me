Template.question.events({
	'click .questionTitle' : function (){
		Session.set("questionToShow", this._id);
	},

  'click .search' : function (e) {
    var queryToSend = $('.searchInput').val();
    var searchResults = "";
    SearchResultsCollection.remove({query: queryToSend});
    Meteor.http.post("http://localhost:8080", {data: {key: queryToSend, queryType: "search"}},
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
    	}
    );
  }
});

Template.question.searchResults = function () {
	var currentSearchQuery = Session.get("searchQuery");
	var result = SearchResultsCollection.find({
		query: currentSearchQuery
	})
	return SearchResultsCollection.find({query: Session.get("searchQuery")});
};