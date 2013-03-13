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
    this.collection = new Meteor.Collection(this.createdAt.toString());
    console.log(this.collection);
    var queryToSend = this.text;
    var searchResults = "";
    var that = this;
    Meteor.http.post("http://localhost:8080", {data: {key: queryToSend, queryType: "search"}}, function(error, result){
      console.log("That, when the post is first entered: " + that);
      if(error){
        console.log(error);
      }
      searchResults = JSON.parse(result.content);
      var $container = $('.answerChoice',$(e.toElement).parent().parent());
      $container.html("");
      _.each(searchResults, function(object){
        console.log("The collection is: " + that.collection);
        SearchResultsCollection.insert(object);
      }, that);
    });
  }
});

Template.answer.searchResults = function(){
  return SearchResultsCollection.find({});
};