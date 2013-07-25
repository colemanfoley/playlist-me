var app = app || {};

$(function() {
	var questions = [
		{title: 'What is this?', user: 'Curtis Jackson'},
		{title: 'What the?', user: 'Marshall Mathers'},
		{title: 'Can I get a?', user: 'Shawn Carter'}
	];

	new app.QuestionsView(questions);
})