app.controller("AddressViewCtrl", function($routeParams, $scope, AddressFactory){
console.log("Address View Contorller Connected");
	$scope.selectedAddress = {};
	$scope.tools = [];

	// console.log("routeParams", $routeParams);

	AddressFactory.getSingleAddress($routeParams.id).then((results)=>{
		$scope.selectedAddress = results.data;
	}).catch((error) => {
		console.log("getSingleAddressError", error);
	});

});