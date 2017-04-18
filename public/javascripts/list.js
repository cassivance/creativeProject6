var myApp = angular.module("myApp",["firebase"]);
myApp.controller("main", ["$scope", "$firebaseArray",
 function($scope, $firebaseArray) {
   var ref = firebase.database().ref().child("messages");
   $scope.list = $firebaseArray(ref);
   $scope.update = function(url) {
       var newmessage = {body:url};
       console.log(newmessage);
       $scope.list.$add(newmessage);
       url = "";
   }
 }
]);
