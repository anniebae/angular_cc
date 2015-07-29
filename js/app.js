// directives: HTML annotations that trigger JavaScript behaviors
// modules: where out application compenents live
// controllers: where we add application behavior
// expressions: how values get displayed within the page

// controllers are where we define our app's behavior by defining functions and values

  var app = angular.module('store', []);

  app.controller("StoreController", function() {
    // this.products = gems;
    this.products = [
      {
        name: 'Awesome Multi-touch Keyboard',
        price: 250.00,
        description: '.....',
        images: [...],
        reviews: [
          {
            stars: 5,
            body: 'I love this product!',
            author: 'joe@thomas.com'
          },
          {
            stars: 1,
            body: 'This product sucks',
            author: "time@hater.com"
          }
        ]
      }
    ]
  });

  app.controller ("PanelController", function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    }
  });

  var gems = [
  {
    name: 'Dodecahedron',
    price: 2,
    description: "......",
    images: [
      {
        full: './stylesheets/images/dodecahedron.png',
        thumb: './stylesheets/images/dodecahedron.png'
      },
      {
       full: './stylesheets/images/dodecahedron.png',
       thumb: './stylesheets/images/dodecahedron.png' 
      }
    ]
  },
  {
    name: 'Pentagonal Gem',
    price: 5.95,
    description: ".......",
    images: [
      {
        full: './stylesheets/images/dodecahedron.png',
        thumb: './stylesheets/images/dodecahedron.png'
      },
      {
       full: './stylesheets/images/dodecahedron.png',
       thumb: './stylesheets/images/dodecahedron.png' 
      }
    ]
  }
];
