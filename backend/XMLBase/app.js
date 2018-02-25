var inputUser = $('#username');
inputUser.on('keypress',function(){
	if(e.which === 13){
		ajaxAsync();
	}
});

function ajaxAsync(){
	var URL = 'http://api.github.com/users';
	var username = inputUser.val().trim().tolowercase();
	if(username !== ""){
		var Urluser = Url + username;
		$.ajax({
			url: Urluser,
			type: 'GET',
			async: true;
			sucess: function(response){
				var data = response;
				if(data.message && data.message == "Not found"){
					alert("El usuario no existe en Github");
				}else{
					$('img').attr('src',data.avatar_url);
					$('.name').text(data.name);
					$('.username').text(data.login);
					$('.email').text(data.email);
					$('.company').text(data.company);
					$('.location').text(data.location);
					$('.followers').text(data.followers);
				}
			}
		});
	}else{
		alert('Debe ingresar un nombre de usuario');
	}
}
