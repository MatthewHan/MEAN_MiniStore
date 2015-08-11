app.controller('CustomersController', [ 'CustomersFactory', 'HelperFactory', function(CustomersFactory, HelperFactory){
	//console.log('CustomersController Loaded');
	that = this;
	this.customers = HelperFactory.getCustomers();
	this.searchWord = {};
	this.errors = [];
	this.addCustomer = function(newCustomer){
		this.errors=[];
		//console.log("newUser param ", newCustomer);
		if(newCustomer){
			CustomersFactory.addCustomer(newCustomer, function(res){
				if(res.status == false) {that.errors.push(res.error)}
				this.customers = HelperFactory.getCustomers();
			})
			that.newCustomer = {};
		}
	}
	this.removeCustomer = function(customer){
		//console.log("CustomersController removeCustomer ", customer);
		CustomersFactory.removeCustomer(customer, function(){
			this.customers = HelperFactory.getCustomers();
		});
	}
}])

app.controller('OrdersController', ['OrdersFactory','HelperFactory', function(OrdersFactory, HelperFactory){
	that = this;
	this.orders = [];
	this.products = HelperFactory.getProducts();
	this.customers = HelperFactory.getCustomers();
	this.searchWord = {};
	var getOrders = function(){
		OrdersFactory.getOrders(function(orders){
			that.orders = orders;
		})
	}
	this.addOrder = function(newOrder){
		if(newOrder.name && newOrder.quantity && newOrder.product){
			OrdersFactory.addOrder(newOrder, function(){
				getOrders();
			})
			that.newOrder = {};
		}
	}
	getOrders();
}])

app.controller('ProductsController', ['ProductsFactory', 'HelperFactory', function(ProductsFactory, HelperFactory){
	//console.log('ProductsController Loaded');
	that = this;
	this.products = HelperFactory.getProducts();
	this.addProduct = function(newProduct){
		console.log('ProductsController addProduct ', newProduct)
		if(newProduct){
			ProductsFactory.addProduct(newProduct, function(){
				this.products = HelperFactory.getProducts();
			})
			that.newProduct = {};
		}
	}

}])

app.controller('DashboardsController', ['HelperFactory', function(HelperFactory){
	that = this;
	that.orders = HelperFactory.getOrders();
	that.products = HelperFactory.getProducts();
	that.customers = HelperFactory.getCustomers();
}])