var songToPlay = "";
Template.answer.events({
  'click .play' : function () {
    $('#placeholder').rdio("GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=");
    var songToSend = this.text;
    $('#placeholder').bind('ready.rdio', function(e) {
      Meteor.http.post("http://localhost:8080", {content: songToSend},function(error, result){
        songToPlay = JSON.parse(result.content).key;
        $('#placeholder').rdio().play(songToPlay);
      });
    });
  },

  'click .pause' : function () {
    $('#placeholder').rdio().pause();
  }
});