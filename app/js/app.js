/**
 * Created by lulizhou on 2015/11/21.
 */
var toDoList=angular.module("toDoList",["ngTouch","ui.router","app.data","ngAnimate-animate.css"]);
toDoList.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/main");
    $stateProvider.state("index",{
        url:"/",
        templateUrl:"./tpls/main.html"
    })
        .state("index.main",{
            url:"main",
            views:{
                "appAdd@index":{
                    templateUrl:"./tpls/appBase.html",
                    controller:"data"
                }
            }
        })
        .state("index.add",{
            url:"add",
            views:{
                "appAdd@index":{
                    templateUrl:"./tpls/appAdd.html",
                    controller:"addCtl"
                }
            }
        })
});