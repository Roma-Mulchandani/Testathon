angular.module('app.services', []).factory('Shipwreck', function($resource) {
  return $resource('10.20.41.182:9999/api/v1/shipwrecks/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
