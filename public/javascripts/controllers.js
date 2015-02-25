
angular.module('blogapp.controllers', ['blogapp.services']).controller('CreatePostController', function (Blog) {
    var cp = this;
    cp.blog = {};
    cp.create = function() {
        cp.message = '';
        Blog.save(cp.blog, function (data) {
            cp.blog = data;
            cp.message = 'Successfully created message!';
        });
    };
}).controller('BlogListController', function (Blog) {
    var bl = this;
    bl.blogs = [];
    Blog.query(function (data) {
        bl.blogs = data;
    });
}).controller('ListPostController', function (Blog, $routeParams) {
    var lp = this;
    lp.blog = {};
    Blog.get({id: $routeParams.id}, function (data) {
        lp.blog = data;
    });
});