Template.answer.events({
  'click .play' : function () {
    var songToSend = this.text;
    var songToPlay = "";
    if ($('#placeholder').is(':empty')) {
      $('#placeholder').rdio("GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=");
      $('#placeholder').bind('ready.rdio', function(e) {
        Meteor.http.post("http://localhost:8080", {data: {key: songToSend, queryType: "play"}},function(error, result){
          songToPlay = JSON.parse(result.content).key;
          $('#placeholder').rdio().play(songToPlay);
        });
      });
    }
    else {
      Meteor.http.post("http://localhost:8080", {data: {key: songToSend, queryType: "play"}},function(error, result){
        songToPlay = JSON.parse(result.content).key;
        $('#placeholder').rdio().play(songToPlay);
      });
    };
  },

  'click .pause' : function () {
    $('#placeholder').rdio().pause();
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

Template.answer.searchResults = function(){
  var currentSearchQuery = Session.get("searchQuery");
  var result = SearchResultsCollection.find({
    query: currentSearchQuery
  });
  return result
};

Template.answer.currentAnswer = function () {
  return Session.equals("currentAnswer", this.createdAt);
};