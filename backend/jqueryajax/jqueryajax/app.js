for (var i = 1; i <= 80; i++) {
	//url= 'http://pokeapi.co/api/v2/pokemon-form/'+i,
	
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon-form/'+i,
		type: 'GET',
		data: {},
		crossDomain: true,
		success: function(data){
			$('.pokemons').append('<li><img src=">'+data.sprites.front_default+'"></img></li>');
			console.log(data.sprites.front_default);
		}
	});	
}