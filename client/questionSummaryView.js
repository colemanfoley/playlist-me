//If a question title is clicked, that question is to be displayed in the detailed view.
Template.questionSummary.events({
	'click .questionTitle' : function (){
		Session.set("questionToShow", this._id);
	}
});