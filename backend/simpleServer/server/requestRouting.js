var dispatcher = require('httpdispatcher');
function handleRequest(req,res){
	dispatcher.onGet('/users',function(req,res){
		res.writeHead(200,{'Content-type':'text/plain'})
		res.end('Estas en el modulo de usuarios')
	})
	dispatcher.onGet('/admin',function(req,res){
		res.writeHead(200,{'Content-type':'text/plain'})
		res.end('Estas en el modulo de administradores')
	})
	dispatcher.onGet('/dashboard',function(req,res){
		res.writeHead(200,{'Content-type':'text/plain'})
		res.end('Estas en el modulo de dashboard')
	})
	dispatcher.onError(function(req,res){
		res.writeHead(400,{'Content-type':'text/plain'})
		res.end('No se encontro el recurso solicitado')
	})

	dispatcher.dispatch(req,res)
}

/*
function handleRequest(req,res){
	var url = req.url
	switch (url){
		case '/users':
			res.end('Esta en el modulo de usuarios');
		break;
		case '/admin':
			res.end('Esta en el modulo de administradores');
		break;
		case '/dashboard':
			res.end('Esta en el modulo de dashboard');
		break;
		default:
			res.end('Recurso no encontrado')
			break;
	}
}
*/