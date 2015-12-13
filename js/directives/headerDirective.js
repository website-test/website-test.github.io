/**
  * @class Directives.AccountSelection
  * This is a directive implementing 'Hello-World'.
  */
portfolioApp.directive('headerDirective',['menuService', function(menuService) {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl:'views/header.html',
      require: 'menuDirective',
      controller: function($scope, $element){
      	
		    angular.element(".toggle-btn").data("toggle-btn", true);
      	var toggleBtnElement = angular.element(".toggle-btn");
        toggleBtnElement.bind('click', function(){
            $scope.toggleBtnClicked();
        });

      }
  };
}]);