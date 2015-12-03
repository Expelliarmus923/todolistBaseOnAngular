/**
 * Created by lulizhou on 2015/11/21.
 */
var toDoList=angular.module("toDoList",["ngTouch","ngAnimate","ui.router","app.data"]);
toDoList.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/main");
    $stateProvider.state("index",{
        url:"/",
        templateUrl:"./tpls/main.html"
    })
        .state("index.main",{
            url:"main",
            views:{
                "appBase@index":{
                    templateUrl:"./tpls/appBase.html",
                    controller:"data"
                }
            }
        })
        .state("index.add",{
            url:"add",
            views:{
                "appBase@index":{
                    templateUrl:"./tpls/appAdd.html",
                    controller:"addCtl"
                }
            }
        })
});