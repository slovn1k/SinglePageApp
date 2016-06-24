var app = angular.module('app', []);

app.controller('mainCtrl', function ($scope, $window, Calculator) { 
    $scope.values = {
        first: 0,
        second: 0
    };
    $scope.sign = '+';
    $scope.result = 0;
    
    $scope.doCalculations = function(sign, a, b){
        switch(sign){
            case '+':
            	$scope.result = Calculator.add(a, b);
            break;
            case '-': $scope.result = Calculator.substract(a, b); break;
            case '*': $scope.result = Calculator.multiply(a, b); break;
            case '/':
            if(a == 0 || b == 0){
            	$window.alert("Не разрешено делить на ноль!!!");
            } else {
             $scope.result = Calculator.divide(a, b);
             } 
             break;
        }
    };

    $scope.reset = function(){
    	$scope.values.first = 0;
    	$scope.values.second = 0;
    	$scope.sign = '+';
    	$scope.result = 0;
    };

});

app.service('Calculator', function(){

    this.add = function(a, b){
        return parseInt(a) + parseInt(b);
    };
    
    this.substract = function(a, b){
        return a - b;
    };
    
    this.multiply = function(a, b){
        return a * b;
    };
    
    this.divide = function(a, b){
        return a / b;
    };

});