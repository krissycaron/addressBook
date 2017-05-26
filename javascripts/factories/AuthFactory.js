app.factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {
  console.log("AuthFactory attached");
  
  let currentUserData = null;

  //Firebase: Determine if user is authenticated.
  let isAuthenticated = () => {
    return firebase.auth().currentUser ? true : false; //terniary? this is the question mark?
  };

  //Firebase: Return email, UID for user that is currently logged in. pulls from FB the user info
  let getUser = () => {
    return firebase.auth().currentUser;
  };

  // Kills browser cookie with firebase credentials
  let logout = () => {
    firebase.auth().signOut();
  };

  //Firebase: Use input credentials to authenticate user.email and password
  let authenticate = (credentials) => {
    return $q((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  //Firebase: Register a new user with email and password
  let registerWithEmail = (user) => {
    return $q((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((resultz) => {
        resolve(resultz);
      }).catch((error) => {
        reject(error);
      });
    });
  };


  return { isAuthenticated: isAuthenticated, getUser: getUser, logout: logout, registerWithEmail: registerWithEmail, authenticate: authenticate};
});