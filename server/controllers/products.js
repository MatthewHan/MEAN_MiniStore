var Product = mongoose.model('Product');
module.exports = (function(){
	return {
		index: function(req, res){
			console.log("Server/Ctrl/Products - Index");
			Product.find({}, function (err, products){
				if(err){
					res.json([{name: "Updating, come back later"}]);
				} else {
					console.log('GETPRODUCT MODEL ', products);
					res.json(products);
				}
			})

		},
		create: function(req, res){
			console.log("Server/Ctrl/Orders - Create");
			var product = new Product;
			product.name = req.body.name;
			product.quantity = req.body.quantity;
			product.imageurl = req.body.imageurl;
			product.description = req.body.description;
			product.save(function(err){
				if(err){
					console.log(err);
					res.json({status:false});
				} else {
					console.log('created');
					res.json({status:true});
				}
			})
		},
		update: function(req, res){
			console.log("Server/Ctrl/Orders - Update");
			console.log('req body ', req.body);
			Product.findOne({name: req.body.product}, function(err, product){
				if(product.quantity >= req.body.quantity){
					product.quantity -= req.body.quantity;
					product.save(function(err){
						if(err)
							res.json({status:false});
						else
							res.json({status:true});
					})
				} else {
					res.json({status:false, error: "Not enough of that product remains"});
				}
			})
		}
	}
})();