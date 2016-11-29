angular.module('app.services', []).factory('Shipwreck', function($resource) {
  return $resource('http://ec2-52-90-146-157.compute-1.amazonaws.com:9999/api/v1/shipwrecks/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
