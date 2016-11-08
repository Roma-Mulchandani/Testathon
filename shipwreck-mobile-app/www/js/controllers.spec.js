describe('Controllers', function(){

	beforeEach(angular.mock.module('app'));

	var $scope, controller, $state, popupService, Shipwreck, $window;

	beforeEach(inject(function($rootScope, $controller, _$state_, _popupService_, _Shipwreck_, $window){
		popupService = _popupService_;
		Shipwreck = _Shipwreck_
		$scope = $rootScope.$new();
		$state = _$state_;

		controller = $controller('ShipwreckListController', {
			$scope : $scope,
			popupService : popupService,
			Shipwreck : Shipwreck
		});
	}))

	describe("ShipwreckListController", function(){

		it('popupService should exists', function() {
			expect(popupService).toBeDefined();
		})

		it('Shipwreck should exists', function() {
			expect(Shipwreck).toBeDefined();
		})

		it('should exist $scope.deleteShipwreck()', function(){
			expect(angular.isFunction($scope.deleteShipwreck)).toBe(true)
		});

		it('should exist Shipwreck.query()', function(){
			expect(angular.isFunction(Shipwreck.query)).toBe(true)
		});

		it('should exist popupService.showPopup()', function(){
			expect(angular.isFunction(popupService.showPopup)).toBe(true)
		});

		it("Shipwreck.query() should fetch all shipwrecks", function(){

			var shipWrek = ['obj1', 'obj2']
			spyOn(Shipwreck, 'query').and.callFake(function(){
				return shipWrek;
			})

			$scope.shipwrecks = Shipwreck.query();

			expect(Shipwreck.query).toHaveBeenCalled();
			expect($scope.shipwrecks).toEqual(shipWrek);
		});
	})	

	describe("ShipwreckViewController", function(){

		it('Shipwreck should exists', function() {
			expect(Shipwreck).toBeDefined();
		})
		
		it("Shipwreck.query() should fetch all shipwrecks", function(){

			var shipWrek = ['obj1', 'obj2']
			spyOn(Shipwreck, 'get').and.callFake(function(){
				return shipWrek;
			})

			$scope.shipwrecks = Shipwreck.get({'1' :'obj1'});

			expect(Shipwreck.get).toHaveBeenCalled();
			expect($scope.shipwrecks).toEqual(shipWrek);
		});
	})
})