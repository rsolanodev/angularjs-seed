myApp.factory('myService', function() {
   return {
       saludo: function() {
           return 'Hello world, this message comes from a service.';
       },
   }
});