if (Meteor.isClient) {
  Template.hello.greet = function () {
    return "Enter a question to get music recommendations.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      var questionText = $('#questionInput').val();
      console.log(questionText);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}