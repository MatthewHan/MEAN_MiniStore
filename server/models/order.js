var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
	customer_name: { type: String },
	product: { type: String },
  	quantity: { type: Number },
  	created_at: { type: Date, default: Date.now }
});

mongoose.model('Order', OrderSchema);
OrderSchema.path('customer_name').required(true, "Name is required");
OrderSchema.path('product').required(true, "Product is required");
OrderSchema.path('quantity').required(true, "Quantity is required");