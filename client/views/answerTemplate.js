//These are the listeners for the answer template.
Template.answer.events({
  //When play is clicked, it checks if there is already a placeholder, and adds one if there isn't.
  //Then it calls the play method on the placeholder. The key is the unique id of the song on Rdio.
  'click .play' : function () {
    var songToPlay = this.key;
    if ($('#placeholder').is(':empty')) {
      var playbackToken = "GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=";
      $('#placeholder').rdio(playbackToken);
      $('#placeholder').bind('ready.rdio', function(e) {
        $('#placeholder').rdio().play(songToPlay);
      });
    }
    else {
      $('#placeholder').rdio().play(songToPlay);
    };
  },
  //Simply calls the pause method on the placeholder. This pauses whatever song is currently playing.
  'click .pause' : function () {
    $('#placeholder').rdio().pause();
  }
});
