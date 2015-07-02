var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	name: { type: String, trim: true, unique:true },
	imageurl: { type: String },
	description: { type: String },
  	quantity: { type: Number },
  	created_at: { type: Date, default: Date.now }
});

mongoose.model('Product', ProductSchema);
ProductSchema.path('name').required(true, "Name is required");
ProductSchema.path('quantity').required(true, "Quantity is required");
ProductSchema.path('imageurl').required(true, "Image is required");
ProductSchema.path('quantity').min(0, "Not enough available");
