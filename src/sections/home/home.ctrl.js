myApp.controller('HomeController', function ($scope, myService) {
    $scope.resultado = myService.saludo();
});