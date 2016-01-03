var app = angular.module('app',[]);

app.controller('PostsCtrl', function($scope, $http){
    $scope.addPost = function(){
      if($scope.postBody){
        $http.post('/api/posts',{
          username : "Rachy B",
          body     : $scope.postBody
        }).success(function(post){
          $scope.posts.unshift(post);
          $scope.postBody = null;
        })
    }
  }

  $http.get('http://localhost:3000/api/posts')
  .success(function(posts){
    $scope.posts = posts
  })
})
