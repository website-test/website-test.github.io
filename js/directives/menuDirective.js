/**
  * @class Directives.AccountSelection
  * This is a directive implementing 'Hello-World'.
  */
portfolioApp.directive('menuDirective',['menuService', function(menuService) {
  return {
      restrict: 'AE',
      replace: 'true',
      require: '^menuService',
      templateUrl:'views/menu.html',
      controller: function($scope, $element, $http, $window, $anchorScroll, $document, $location) {

        $scope.newMenu = false;
        $scope.backgroundClass = "about-header";

        $scope.menus = [];
        $scope.activeMenuIndex = 0;
        $scope.menuStatus = [];
        $scope.mobileView = false;

        menuService.getMenuData().success(function(data){  
          $scope.menus = data.menus;
          menuService.menus = data.menus;
          menuService.selectedTile = menuService.menus[0].tiles[0];
          var i;
          for(i=0;i<$scope.menus.length;i++){
            $scope.menuStatus.push(false);
          }
          if($window.innerWidth >= 992){
            $scope.menuStatus[$scope.activeMenuIndex] = true;
          }
          else{
            $scope.mobileView = true;
          }
          var j;
          var curUrl = "#" + $location.path();
          for(i=0;i<$scope.menus.length;i++){
            for(j=0;j<$scope.menus[i].tiles.length;j++){
                if(curUrl == $scope.menus[i].tiles[j].link){
                  var newClass = $scope.menus[i].tiles[j].colorClass;
                  newClass = newClass.substring(0, newClass.indexOf('-')+1);
                  $scope.backgroundClass = newClass + "header";
                  $scope.activeMenuIndex = i;
                  $scope.updateMenuStatus(j, true);
                  break;
                }
            }
          }
        });
        
        $element.data("menuDirective", true);
        angular.element($document[0].body).on('click', touchOrClick);
        angular.element($document[0].body).on('touchstart', touchOrClick);

        function touchOrClick(e){
            var inMenuDirective = angular.element(e.target).inheritedData('menuDirective');
            var onToggleBtn = angular.element(e.target).inheritedData('toggle-btn');
            if(!(inMenuDirective || onToggleBtn)){
                if($scope.mobileView){
                  var i;
                  for(i=0;i<$scope.menuStatus.length;i++){
                    if($scope.menuStatus[i] == true){
                        var j;
                        for(j=0;j<=i;j++)
                            $scope.menuStatus[j] = false;
                        $scope.$apply();
                        break;
                    }
                  }
                }
            }
        }
        $scope.toggleBtnClicked = function(){
            $scope.menuStatus[$scope.activeMenuIndex] = true;
            $scope.$apply();
        };

       $scope.menuTileClicked = function($index){
          if($scope.menus[$scope.activeMenuIndex].tiles[$index].nextMenu){
            $scope.activeMenuIndex = $scope.menus[$scope.activeMenuIndex].tiles[$index].nextMenu;
            $scope.updateMenuStatus(0, true);
          }
          else
            $scope.updateMenuStatus($index);
          menuService.selectedTile = menuService.menus[$scope.activeMenuIndex].tiles[$index];
          $anchorScroll();
        };

        $scope.backClicked = function(){
          $scope.activeMenuIndex = $scope.menus[$scope.activeMenuIndex].backMenuIndex;
          menuService.selectedTile = menuService.menus[$scope.activeMenuIndex].tiles[0];
          $scope.updateMenuStatus(0, true);
          $anchorScroll();
        };

        $scope.updateMenuStatus = function(tileIndex, changeInMenuLevel){
          var i;
          for(i=0;i<$scope.menuStatus.length;i++){
            $scope.menuStatus[i] = false;
          }
          if(changeInMenuLevel || !$scope.mobileView){
            $scope.menuStatus[$scope.activeMenuIndex] = true;
          }
          var newClass = menuService.menus[$scope.activeMenuIndex].tiles[tileIndex].colorClass;
          newClass = newClass.substring(0, newClass.indexOf('-')+1);
          $scope.backgroundClass = newClass + "header";
        };

        $scope.getMenuStatus = function($index){
          return ($index <= $scope.activeMenuIndex) ? $scope.menuStatus[$scope.activeMenuIndex] : false;
        };
      }
  };
}]);