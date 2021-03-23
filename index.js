/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "My favorite Leonardo DiCaprio Movies",
      movies: ["The Departed", "Blood Diamond", "Inception", "Wolf of Wallstreet"],
      newMovie: ""
    };
  },
  methods: {
    addNewMovie: function () {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    }
  }
});