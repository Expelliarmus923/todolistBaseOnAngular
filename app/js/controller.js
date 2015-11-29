/**
 * Created by lulizhou on 2015/11/21.
 */
angular.module("app.data",["ui.router","ngCookies"])
    .factory("Todos",["$cookies",function($cookies){
        var cookietodo = [];
        return{
            getTodos:function(){
                var obj = $cookies.getAll();
                var keys = _.keys(obj);
                for(var index=0;index<keys.length;index++){
                    cookietodo[index]=JSON.parse(obj[keys[index]]);
                }
                console.log(cookietodo);
                return cookietodo
            },
            addTodo:function(newTodo){
                $cookies.putObject(newTodo['id'],newTodo);
            },
            done:function(item){
                item.done =! item.done;
                this.addTodo(item);
            },
            removeTodo:function(item){
                console.log(item.id)
                $cookies.remove(item.id);
                var index = _.indexOf(cookietodo,item);
                cookietodo.splice(index,1);
            }
        }
    }])
    .controller("data",['$scope','$state',"Todos","$cookies",function($scope,$state,Todos,$cookies){
        $scope.todos=Todos.getTodos();
        $scope.getLength=function(){
            return $scope.todos.length;
        };
        $scope.done=function(item){
            Todos.done(item);
        };
        $scope.remove = function(item){
            Todos.removeTodo(item);
        }
    }])
    .controller("addCtl",["$scope","Todos","$state",function($scope,Todos,$state){
        $scope.add=function(){
            if(_.isEmpty($scope.newTitle)&& _.isEmpty($scope.newContent)) {
                alert("请填写内容!");
                return false;
            }
            var newTodo = {
                title:$scope.newTitle,
                time:new Date(),
                content:$scope.newContent,
                done:false,
                id:Date.parse(new Date())
            };
            Todos.addTodo(newTodo);
            console.log(Todos.getTodos());
            $state.go("index.main")
        };

    }]);