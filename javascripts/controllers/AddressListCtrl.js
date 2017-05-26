app.controller("AddressListCtrl", function($rootScope, $scope, AddressFactory){
console.log("Address List controller Connected");
  $scope.contacts = [];
      
    let getAddress = () =>{
      AddressFactory.getAddressList($rootScope.user.uid).then((contacts)=>{
        console.log("contacts", contacts);
        $scope.contacts = contacts;
        }).catch((error)=>{
        console.log("got an error in getAddress", error);
        });
      };


    getAddress();

    //46.37 get note ... 
    $scope.deleteAddress = (id) =>{
      console.log("deleteAddress");
      AddressFactory.deletez(id).then(()=>{
		console.log("deleteAddress");
        getAddress();
      }).catch((error)=>{
        console.log("delete item error", error);
      });
    };


    // $scope.inputChange = (item) =>{
    //   AddressFactory.editItem(item).then(()=>{

    //   }).catch((error)=> {
    //     console.log("error in inputchange", error);
    //   });
    // };

});