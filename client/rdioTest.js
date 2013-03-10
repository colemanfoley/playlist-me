var songKey = "";
Template.rdioTest.events({
  'click .getTracks' : function (argument) {
    Meteor.http.get("http://localhost:8080", function(error, result){
      songKey = result.content;
      alert(songKey);
    });
  },
  'click .play' : function () {
    $('#placeholder').rdio("GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=");
    $('#placeholder').bind('ready.rdio', function(e) {
      $('#placeholder').rdio().play(songKey);
    });
  },

  'click .pause' : function () {
    $('#placeholder').rdio().pause();
  }
});