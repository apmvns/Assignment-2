(
    function() {
        angular.module('checkOffApp', [])
        .controller('toBuyController', toBuyController)
        .controller('alreadyBoughtController', alreadyBoughtController)
        .service('buyBoughtServer', buyBoughtServer);

        toBuyController.$inject = ['buyBoughtServer'];
        function toBuyController(buyBoughtServer) {
            var toBuy = this;
            toBuy.items = [
                            {
                                name:'Apples',
                                quantity: 3
                            },
                            {
                                name: 'Milk',
                                quantity: 2
                            },
                            {
                                name: 'Eggs',
                                quantity: 5
                            },
                            {
                                name: 'Bread',
                                quantity:4
                            },
                            {
                                name: 'Cake',
                                quantity: 3
                            },
                            {
                                name: 'Buiscuits',
                                quantity: 4
                            }
                          ];
            toBuy.moveItem = function(itemIndex) {
                buyBoughtServer.moveItem(itemIndex, toBuy.items);
            }

            
        };

        alreadyBoughtController.$inject = ['buyBoughtServer'];
        function alreadyBoughtController(buyBoughtServer) {
          var alreadyBought = this;  
          alreadyBought.items = buyBoughtServer.items;
        };

        function buyBoughtServer() {
            var buyBought = this;
            buyBought.items = [];
            buyBought.moveItem = function (itemIndex, arrayOfitems) {
                var item = {
                    name: '',
                    quantity: ''
                }
                item.name = arrayOfitems[itemIndex].name;
                item.quantity = arrayOfitems[itemIndex].quantity;
                arrayOfitems.splice(itemIndex, 1);
                buyBought.items.push(item);
            };

        };
    }
)();