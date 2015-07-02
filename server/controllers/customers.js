var Customer = mongoose.model('Customer');
module.exports = (function(){
	return {
		index: function(req, res){
			//console.log("Server/Ctrl/Customers - Index");
			Customer.find({}, function (err, customers){
				if(err){
					res.json([{name: "Updating, come back later"}]);
				} else {
					res.json(customers);
				}
			})
		},
		create: function(req, res){
			//console.log("Server/Ctrl/Customers - Create");
			var customer = new Customer;
			customer.name = req.body.name;
			customer.save(function(err){
				if(err){
					//console.log(err);
					res.json({status:false, error:'Name is Required & must be Unique'});
				} else {
					res.json({status:true});
				}
			})
		},
		destroy: function(req, res){
			//console.log("Server/Ctrl/Customers - Delete");
			Customer.remove({_id:req.params.id}, function(err){
				if(err){
					res.json({status:false});
				} else {
					res.json({status:true});
				}
			})
		}
	}
})();