console.log("angular");

var app  = angular.module('store', []);
app.controller('StoreController', function(){
  this.products = gems;
});
app.controller('PanelController', function(){
  this.tab = 1;
  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab == checkTab;
  };
});

var gems = [
  {
    name: 'Dodecahedron',
    price: 2,
    description: '........',
    images: [
      {
        full: 'img.jpg',
        thumb: 'img.jpg'
      },
      {
        full: 'img.jpg',
        thumb: 'img.jpg'
      }
    ],
    canPurchase: true,
    // soldOut: false 
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: '........',
    images: [
      {
        full: 'img.jpg',
        thumb: 'img.jpg'
      },
      {
        full: 'img.jpg',
        thumb: 'img.jpg'
      }
    ],
    canPurchase: false
  }
]