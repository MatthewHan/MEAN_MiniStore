module.exports = function(app) {
  	var customers = require('../controllers/customers.js');
  	var orders = require('../controllers/orders.js');
  	var products = require('../controllers/products.js');
// Customers
    // Index
	app.get('/customers', function (req, res) { customers.index(req, res) })
	// Create
	.post('/customers', function (req, res) { customers.create(req, res) })	
	// Delete
	.delete('/customers/:id', function (req, res) { customers.destroy(req, res) })
// Orders
	// Index
	.get('/orders', function (req, res) { orders.index(req, res) })
	// Create
	.post('/orders', function (req, res) { orders.create(req, res) })
// Products
	.get('/products', function (req, res) { products.index(req, res) })
	// Create
	.post('/products', function (req, res) { products.create(req, res) })
	// Patch
	.patch('/products', function (req, res) { products.update(req, res) })

}