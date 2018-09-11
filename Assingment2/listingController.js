angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {
      var listing = {
        'code': $scope.code,
        'name': $scope.name,
        'coordinates': {
          'latitude': $scope.latitude,
          'longitude': $scope.longitude
        },
        'address': $scope.address
      };

      // Add listing
      $scope.listings.unshift(listing);

      // Clear text
      $scope.code = '';
      $scope.name = '';
      $scope.latitude = '';
      $scope.longitude = '';
      $scope.address = '';

    };
    
    $scope.deleteListing = function(index) {
    	      for (var i = 0; i < $scope.listings.length; i++) {
        if ($scope.listings[i] == this.record) {
          $scope.listings.splice(i, 1);
        }
      }
    };

    $scope.showDetails = function(index) {
    	 $scope.detailedInfo = this.record;
    };
  }
]);