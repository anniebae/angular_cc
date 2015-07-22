
  var app = angular.module('store', []);

  // controllers are where we define our app's behavior by defining functions and values

  app.controller("StoreController", function() {
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: "......",
  }