Template.question.events({
	'click .questionTitle' : function (){
		Session.set("questionToShow", this._id);
	},
  'click .answer' : function (e) {
    var $input = $('.answerInput',$(e.toElement).parent());
    Questions.update({_id: this._id},
      {$push: {answers: {text: $input.val(), user:Meteor.user(), createdAt: Date.now()} } }
    );
  },
  'click .search' : function (e) {
    Session.set("currentAnswer", this.createdAt);
    var queryToSend = this.text;
    var searchResults = "";
    SearchResultsCollection.remove({query: queryToSend})
    Meteor.http.post("http://localhost:8080", {data: {key: queryToSend, queryType: "search"}}, function(error, result){
      if(error){
        console.log(error);
      }
      searchResults = JSON.parse(result.content);
      var d = {
        query: queryToSend,
        result: searchResults
      }

      SearchResultsCollection.insert(d);

      Session.set("searchQuery", queryToSend);
    });
  }
});