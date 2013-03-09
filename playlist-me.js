if (Meteor.isClient) {
  //Initial set-up: specifying which fields accounts-ui should have
  //and making the questions collection.

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });

  Questions = new Meteor.Collection("questions");

  //A helper that returns a greeting to the intro template.

  Template.hello.greet = function () {
    return "Enter a question to get music recommendations.";
  };

  //Handlers for the hello template.
  Template.hello.events({
    'click .ask' : function () {
      // template data, if any, is available in 'this'
      var question = {};
      question.text = $('#questionInput').val();
      question.user = Meteor.user();
      question.answers = [];
      Questions.insert(question);
    }
  });

  //Handlers for the showQuestions template.
  Template.question.events({
    'click .answer' : function () {
      var answer = {};
      answer.user = Meteor.user();
      answer.text = $('.answerInput').val();
      this.answers.push(answer);
      Questions.update({_id: this._id},
        {$push: {answers: {text: $('.answerInput').val(), user:Meteor.user() } } }
      );
    },

    'click .showAnswers' : function () {
      console.log(this);
      $('.answersList').show();
    }
  });

  Template.showQuestions.questions = function () {
    return Questions.find({});
  };

  Template.rdioTest.events({
    'click .getTracks' : function (argument) {
      Meteor.http.post("http://api.rdio.com/1/", {data: {method: "getTracksForArtist"}}, console.log(result));
    },
    'click .play' : function () {
      $('#placeholder').rdio("GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=");
      $('#placeholder').bind('ready.rdio', function(e) {
        $('#placeholder').rdio().play('a171827');
      });
    },

    'click .pause' : function () {
      $('#placeholder').rdio().pause();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Questions = new Meteor.Collection("questions");
    // code to run on server at startup
  });
}