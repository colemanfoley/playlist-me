Template.answer.events({
  'click .play' : function () {
    var songToPlay = this.key;
    if ($('#placeholder').is(':empty')) {
    var playbackToken = "";
      Meteor.http.post("http://playlist-me-helper.nodejitsu.com:80", {data: {queryType: "getPlaybackToken"}},
        function(error, result){
          if(error){
            console.log(error);
          }
          var playbackToken = JSON.parse(result.content)[1].result;
          $('#placeholder').rdio(playbackToken);
          $('#placeholder').bind('ready.rdio', function(e) {
            $('#placeholder').rdio().play(songToPlay);
          });
        }
      );
    }
    else {
      $('#placeholder').rdio().play(songToPlay);
    };
  },

  'click .pause' : function () {
    $('#placeholder').rdio().pause();
  }
});