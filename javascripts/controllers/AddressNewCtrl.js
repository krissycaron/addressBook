app.controller("AddressNewCtrl", function($rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, AddressFactory){
  $scope.addNewAddress = () =>{
    $scope.newTask.isCompleted  = false;
    $scope.newTask.uid =$rootScope.user.uid;


    // console.log("clicked add", $scope.newTask);
    AddressFactory.postNewItem($scope.newTask)
    .then((response)=>{
      $scope.newTask = {}; //clear the inputs
       $location.url("/address/list");
      console.log("response", response);

      ///switch views
    }).catch((error)=>{
      console.log("Add Error", error);
    });
  };
console.log("Address New Contorller Connected");
});

