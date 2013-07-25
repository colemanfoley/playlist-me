var app = app || {};

app.QuestionsView = Backbone.View.extend({
	el: '#questionList',

	events: {
		'click #ask': 'addQuestion'
	},

	initialize: function(initialQuestions) {
		this.collection = new app.Questions(initialQuestions);
		this.render();
		this.listenTo(this.collection, 'add', this.renderQuestion);
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
	},

	addQuestion: function(event) {
		event.preventDefault();
		var questionData = {};

		questionData.title = $('#questionInput').val();

		this.collection.add(new app.Question(questionData));
	}
});
