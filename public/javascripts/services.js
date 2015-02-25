angular.module('blogapp.services', ['ngResource']).factory('Blog', function ($resource){
// todo: Write the service without $resource ..
    return $resource('/posts/:id');
});