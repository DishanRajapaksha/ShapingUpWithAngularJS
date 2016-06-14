/**
 * Created by dsraj on 6/14/2016.
 */

(function() {
    var app = angular.module('gemStore', []);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        { name: 'Azurite', price: 110.50 },
        { name: 'Bloodstone', price: 22.90 },
        { name: 'Zircon', price: 1100 },
    ];
})();

