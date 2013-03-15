Template.questionSummary.events({
	'click .questionTitle' : function (){
		Session.set("questionToShow", this._id);
	}
});