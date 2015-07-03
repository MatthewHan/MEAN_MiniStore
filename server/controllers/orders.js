var Order = mongoose.model('Order');
module.exports = (function(){
	return {
		index: function(req, res){
			//console.log("Server/Ctrl/Orders - Index");
			Order.find({}, function (err, orders){
				if(err){
					res.json([{name: "Updating, come back later"}]);
				} else {
					console.log('GETORDER MODEL ', orders);
					res.json(orders);
				}
			})

		},
		create: function(req, res){
			//console.log("Server/Ctrl/Orders - Create");
			var order = new Order;
			console.log('req body ', req.body);
			order.customer_name = req.body.name;
			order.quantity = req.body.quantity;
			order.product = req.body.product;
			order.save(function(err){
				if(err){
					console.log(err);
					res.json({status:false});
				} else {
					//console.log('created');
					res.json({status:true});
				}
			})
		}
	}
})();