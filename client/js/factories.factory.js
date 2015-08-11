app.factory('CustomersFactory', function($http){
	return {
		getCustomers: function (callback){
			//console.log('CustomersFactory getCustomers');
			$http.get('/customers').success(function(res){
				callback(res);
			})
		},
		addCustomer: function(newCustomer, callback){
			//console.log("CustomersFactory addCustomer ", newCustomer);
			$http.post('/customers', newCustomer).success(function(res){
				console.log('RESPONSE addCustomer ', res);
				callback(res);
			})
		},
		removeCustomer: function(customer, callback){
			//console.log("CustomersFactory removeCustomer ", customer);
			$http.delete('/customers/'+customer._id).success(function(res){
				callback(res);
			})
		}
	}
})

.factory('OrdersFactory', function($http){
	return {
		getOrders: function(callback){
			//console.log('OrdersFactory getOrders');
			$http.get('/orders').success(function(res){
				//console.log('ORDERSFACTORY RES FROM GET ORDERS ', res);
				callback(res);
			})
		},
		addOrder: function(newOrder, callback){
			//console.log("OrdersFactory addOrder ", newOrder);
			$http.patch('/products', newOrder).success(function(res){
				if(res.status == false){
					console.log('FAILED TO PATCH PRODUCTS QUANTITY', res);
					callback(res);
				} else {
					$http.post('/orders', newOrder).success(function(res){
						callback(res);
					})
				}
			})
		}
	}
})

.factory('ProductsFactory', function($http){
	return {
		getProducts: function(callback){
			console.log('ProductsFactory getProducts');
			$http.get('/products').success(function(res){
				callback(res);
			})
		},
		addProduct: function(newProduct, callback){
			console.log("ProductsFactory addProduct ", newProduct);
			$http.post('/products', newProduct).success(function(res){
				callback(res);
			})
		}
	}
})

.factory('HelperFactory', function(CustomersFactory, ProductsFactory, OrdersFactory){
	var products = [];
	var customers = [];
	var orders = [];
	return {
		getCustomers: function(){
			CustomersFactory.getCustomers(function(customers){
				that.customers = customers;
			})
		},
		getProducts: function(){
			ProductsFactory.getProducts(function(products){
				that.products = products;
				//console.log('HelperFactory products', that.products);
			})
		},
		getOrders: function(){
			OrdersFactory.getOrders(function(orders){
				that.orders = orders;
			})
		}
	};
})