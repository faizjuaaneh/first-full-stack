var app = angular.module("bassmaApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "components/home/home.html",
//            controller:"miancontroller"
    })
    .when("/database", {
            templateUrl: "components/home/database.html",
            controller: "miancontroller"

        })
        .when("/search", {
            templateUrl: "components/home/search.html",
            controller: "mainController"
        })
     .when("/about", {
            templateUrl: "components/home/about.html",
//            controller: "miancontroller"
        })
}]);