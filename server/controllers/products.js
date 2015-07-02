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
			console.log('req body ', req.body);
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
		}
	}
})();