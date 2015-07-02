console.log("angular");

(function() {
  var app  = angular.module('store', ['store-products']);
  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller("ReviewController", function() {
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    }
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
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        }
      ],
      canPurchase: true
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

});