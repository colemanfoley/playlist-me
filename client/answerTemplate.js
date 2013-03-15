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
  }
});