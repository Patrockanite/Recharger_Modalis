(function () {
    'use strict';
    
    angular.module('Patrock_Module', []).controller('PMController', PMController);
    
    PMController.$inject = ['$scope'];
    function PMController($scope) {
       
        var tabPhoto = [1,2,3,4,5];
        $scope.numPhoto = tabPhoto[0];
        /* On mettra un bouton en place pour changer les images et le texte */







    }
    
    })();