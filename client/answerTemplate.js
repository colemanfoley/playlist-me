Template.answer.events({
  'click .play' : function () {
    var songToPlay = this.key;
    if ($('#placeholder').is(':empty')) {
      $('#placeholder').rdio("GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=");
      $('#placeholder').bind('ready.rdio', function(e) {
        $('#placeholder').rdio().play(songToPlay);
      });
    }
    else {
      $('#placeholder').rdio().play(songToPlay);
    };
  },

  'click .pause' : function () {
    $('#placeholder').rdio().pause();
  }
});