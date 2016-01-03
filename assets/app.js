angular.module('app', []);

angular.module('app')
  .controller('PostCtrl', function ($scope, PostsSvc){
    $scope.addPost = function (){
      if ($scope.postBody){
        PostsSvc.create({
          username : "Rachel",
          body     : $sope.postBody
        }).success(function(post){
          $sope.posts.unshift(post)
          $scope.postBody = null
        })
      }
    }
    PostsSvc.fetch().success(function(posts){
      $scope.posts = posts;
    })
  })

angular.module('app')
 .service('PostsSvc', function($http){
   this.fetch = function (){
     return $http.get('/api/posts', post)
   }
 })
