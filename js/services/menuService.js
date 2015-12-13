var menuService = portfolioApp.factory("menuService", ['$http', function($http){
	var service = {};

	service.getMenuData = function(){
		var result = $http.get('data/menu.json');
		return result;
	};

	service.menus = [];
	service.selectedTile = null;

	return service;
}])