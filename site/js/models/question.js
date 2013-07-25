var app = app || {};

app.Question = Backbone.Model.extend({
	defaults: {
		title: 'No title',
		user: 'Anonymous'
	}
})