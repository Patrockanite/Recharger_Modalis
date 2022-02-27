(function () {
    'use strict';
    
    angular.module('Patrock_Module', []).controller('PMController', PMController);
    
    PMController.$inject = ['$scope'];
    function PMController($scope) {
       
        $scope.i=1;
        $scope.numEtape=1;
        $scope.numPhoto = 1;
       
       
        $scope.EtapeSuivante = function(){
            if($scope.i<5){
                $scope.i++;
                $scope.numEtape = $scope.i;
                $scope.numPhoto = $scope.i;
            }
            else{
                $scope.i = 1;
                $scope.numEtape = $scope.i;
                $scope.numPhoto = $scope.i;
            }
        }






    }
    
    })();