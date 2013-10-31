// Generated by CoffeeScript 1.6.3
(function() {
  this.MovieTable = Backbone.View.extend({
    tagName: 'table',
    template: null,
    initialize: function() {
      console.log("A View is initialized");
      console.log(this);
      console.log("###############");
      return this.template = _.template($('#movie-table').html());
    },
    render: function() {
      this.$el.html(this.template({
        movies: this.collection,
        movieTemplate: _.template($('#movie-row').html())
      }));
      return this;
    }
  });

}).call(this);
