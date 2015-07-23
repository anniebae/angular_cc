// directives: HTML annotations that trigger JavaScript behaviors
// modules: where out application compenents live
// controllers: where we add application behavior
// expressions: how values get displayed within the page

  // controllers are where we define our app's behavior by defining functions and values

  var app = angular.module('store', []);


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