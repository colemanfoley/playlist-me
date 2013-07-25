var app = app || {};

app.QuestionsView = Backbone.View.extend({
	el: '#questionList',

	initialize: function(initialQuestions) {
		this.collection = new app.Questions(initialQuestions);
		this.render();
	},
	render: function() {
		this.collection.each(function(item) {
			this.renderQuestion(item);
		}, this);
	},

	renderQuestion: function(item) {
		var questionView = new app.QuestionView({
			model: item
		});
		this.$el.append(questionView.render().el);
	}
});
