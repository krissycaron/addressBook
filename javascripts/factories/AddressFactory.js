app.factory("AddressFactory", function($q, $http, FIREBASE_CONFIG){
  console.log("AddressFactory attached");
	  let getAddressList = (userId) => { 
      let address = [];
      return $q((resolve, reject) => {
        // $.ajax().done().fail ... this is what we were using. nad becasue there is another lib you need to put in the argument. 
        $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json?orderBy="uid"&equalTo="${userId}"`)
        .then((fbItems)=> {
            var addressCollection = fbItems.data;
            if (addressCollection !== null){
              Object.keys(addressCollection).forEach((key) => {
                addressCollection[key].id=key;
                address.push(addressCollection[key]);
              });
            }
            resolve(address);
          // resolve(fbItems);
        })
        .catch((error) => {
          reject(error);
        });
      }); 
    };

  let getSingleAddress = (id) => {
    return $q((resolve, reject)=>{
      $http.get(`${FIREBASE_CONFIG.databaseURL}/address/${id}.json`)
      .then((resultz)=>{
        resultz.data.id = id;
        resolve(resultz);
      }).catch(()=>{
        console.log("get single item error", error);
      });
    });
  };

  let postNewAddress = (newAddress) =>{
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/address.json`, JSON.stringify(newItem))
      .then((resultz)=>{
        resolve(resultz);
      }).catch((error)=>{
        reject(error);
      });
    });
  };


    let deletez = (addressId) => {
      console.log("addressId", addressId);
      return $q((resolve, reject) => {
        $http.delete(`${FIREBASE_CONFIG.databaseURL}/address/${addressId}.json`)
        .then((resultz)=>{
        console.log("delete click");
        resolve(resultz);
      }).catch((error)=>{
        reject(error);
      });
    });
  };


    let editAddress = (address) =>{
      console.log("address", address);
      return $q((resolve,reject)=>{
        $http.put(`${FIREBASE_CONFIG.databaseURL}/address/${address.id}.json`, 
          JSON.stringify({
          assignedTo: address.assignedTo,
          isCompleted: address.isCompleted,
          task: address.task,
          uid: address.uid,
          dueDate: address.dueDate
        })
        ).then((resultz)=>{
        console.log("delete click");
        resolve(resultz);
      }).catch((error)=>{
        reject(error);
      });
    });
    };

    return {getAddressList:getAddressList, getSingleAddress:getSingleAddress, postNewAddress:postNewAddress, deletez:deletez, editAddress:editAddress};

});








