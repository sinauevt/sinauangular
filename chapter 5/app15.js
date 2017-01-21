var app = angular
            .module("Demo", ["ngRoute"])
            .config(function ($routeProvider) {
                $routeProvider
                    .when("/", {                        
                        controller: "homeController",
                        templateUrl: "home.html"
                    })
                    .when("/home", {
                        controller: "homeController",
                        templateUrl: "home.html"
                    })
                    .when("/courses", {                        
                        controller: "coursesController",
                        templateUrl: "courses.html"
                    })
            })
            .controller("homeController", function ($scope) {
                $scope.message = "Home Page";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })