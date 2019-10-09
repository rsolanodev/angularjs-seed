myApp.controller('HomeController', ['$scope', '$http', 'myService',  function ($scope, $http , myService) {
    $scope.resultado = myService.saludo();
}]);