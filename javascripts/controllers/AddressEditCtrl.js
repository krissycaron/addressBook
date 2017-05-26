app.controller("AddressEditCtrl", function($location, $routeParams, $scope, AddressFactory) {
    // console.log("AddressEditCtrl");
    $scope.newTask = {};


    AddressFactory.getSingleAddress($routeParams.id).then((results) => {
    	console.log("results", results);
        // re-assigning the date from a string to a date format for javascript to recognize.
        results.data.dueDate =new Date(results.data.dueDate);

        $scope.newTask = results.data;
        console.log($scope.newTask);
    }).catch((error) => {
        console.log("getSingleAddress error", error);
    });


    $scope.addNewAddress = () => {
        console.log("scope newTask", $scope.newTask);
        AddressFactory.editItem($scope.newTask).then(() => {
            $location.url(`/address/list`);
        }).catch((error) => {
            console.log("editAddress error", error);
        });
    };
});