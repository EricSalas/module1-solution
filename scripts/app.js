(function(){


'use strict';



angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckFunction);


LunchCheckFunction.$inject = ['$scope'];

function LunchCheckFunction($scope){

	$scope.items = "";
	$scope.message = "";
	$scope.color = "";
	



	$scope.checkItems = function(){

		if(!$scope.items == null || !$scope.items == ""){
$scope.color = "green";
	
		var length = getItemsCount();
		if(3>=length){
			$scope.message = "Enjoy!";
		}else{
			$scope.message = "Too much!";
		}

}else{
$scope.color = "red";
	$scope.message = "Please enter data first!";
}


	}


	function getItemsCount(){
		var itemsArray = $scope.items.split(',');
		var tmp = 0;
		for (var i = 0; i<itemsArray.length; i++) {
			if(itemsArray[i].trim().length == 0){
				tmp +=1;
			}

			
		}
		return itemsArray.length - tmp;

	}




};


})();




