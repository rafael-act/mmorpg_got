module.exports = function(application){	
	application.get('/cadastro', function(req, res){
	application.app.controllers.index.index(application,req,res);
	});
}