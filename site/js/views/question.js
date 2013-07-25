var app = app || {};
app.QuestionView = Backbone.View.extend({
	tagName: 'div',
	className: 'questionContainer',
	template: _.template($('#questionSummaryTemplate').html()),

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});