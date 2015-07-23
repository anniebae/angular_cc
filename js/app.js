
  var app = angular.module('store', []);

  // controllers are where we define our app's behavior by defining functions and values

  app.controller("StoreController", function() {
    this.products = gems;
  });

  var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: "......",
    canPurchase: true,
  },
  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: ".......",
    canPurchase: false,
  }
];