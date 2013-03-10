var songToPlay = "";
Template.answer.events({
  'click .play' : function () {
    $('#placeholder').rdio("GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=");
    $('#placeholder').bind('ready.rdio', function(e) {
      Meteor.http.post("http://localhost:8080", {data: {songKey: "hi"}},function(error, result){
        songToPlay = result.content;
        $('#placeholder').rdio().play(songToPlay);
      });
    });
  },

  'click .pause' : function () {
    $('#placeholder').rdio().pause();
  }
});