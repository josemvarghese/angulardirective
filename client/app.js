var app = angular.module("myApp", []);
// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : "main.htm"
//     })
//     .when("/red", {
//         templateUrl : "red.htm"
//     })
//     .when("/green", {
//         templateUrl : "green.htm"
//     })
//     .when("/blue", {
//         templateUrl : "blue.htm"
//     });
// });

app.controller('TestCtrl', function($scope) {
  // console.log($scope)
})
app.directive('urlTwitter', function() {
  return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
         var validateTwurl = function() {
           var twLInk = modelCtrl.$viewValue;   
           console.log(twLInk);
           var url = 'https://twitter.com/';          
           if(twLInk && twLInk.startsWith(url) &&twLInk.length>20 ){
                twLInk = twLInk.split('/');
                var newTWLink = url + twLInk[3];
                modelCtrl.$setViewValue(newTWLink);
                modelCtrl.$render();
           }

           else if(twLInk 
                   && twLInk.length>20
                   ){
                modelCtrl.$setViewValue('https://twitter.com/');
                modelCtrl.$render();
                 // modelCtrl.$setValidity('urlinvalid',true);
           }
           // fbLInk==undefined|| fbLInk==''||fbLInk==null||
           else if( twLInk==undefined|| twLInk.length==0||twLInk==null||!url.includes(twLInk) ){

              modelCtrl.$setViewValue('https://twitter.com/');
              modelCtrl.$render();
              // console.log(fbLInk);
           }
         }
         scope.$watch(attrs.ngModel, function() {
          validateTwurl();
        }); 
     }
  };
});