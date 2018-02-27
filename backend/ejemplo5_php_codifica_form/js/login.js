$(document).ready(function(){
  //boton iniciar sesion
  var btnIngresar = $('button[type="submit"]');
  btnIngresar.click(function(event){
    event.preventDefault();
    login();
  });
  function login(){
    usuario = $("form#login-form").find('input[id="user"]').val();
    password = $("form#login-form").find('input[id="password"]').val();
    $.ajax({
      url: 'php/login.php',
      type:'POST',
      data:{usuario:usuario,password:password}
    }).done(function(respuesta){
      alert(respuesta);
    });
  }
});
