angular.module('main.module', [])
  .controller('restrunnerCtrl', ['$scope', '$http', function($scope, $http) {
    // Initialization for all controls
    $scope.httpMethods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
    $scope.selectedMethod = "GET";
    $scope.urlAddress = "";
    $scope.rawResponse = "";

    $scope.execute = function() {
      $http.get($scope.urlAddress).
        success(function(data) {
            $scope.rawResponse = data;
        });
    };
  }]);