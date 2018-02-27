/*-- FUNCIONES PROPIAS DE LA VISTA --*/
function showNewSearch(){
  $('.back-container').delay(2000).show('slide', { direction: "right" }, 500);
}

function newSearchEvent(){
  $('input[type="text"]').val('');
  $('html, body').animate(
    {
      scrollTop: 0
    },1300, function(){$('.back-container').hide()});
}

/*-- ----------------------------- --*/
var inputPersonaje = $('.input-group-field');
var buscar = $('input:submit');
var URL = 'https://gateway.marvel.com';
var URL2 = '/v1/public/characters'
console.log(URL+URL2+'/?ts=5&apikey=e88f028bfd6c8959a33f4b5823358802&hash=d297d8189c1169babee32bcaab2c6d04&name=');
buscar.on('click',function(){
  $.ajax({
    url: URL+URL2,
    method: 'GET',
    data:{
      ts:5,
      apikey:e88f028bfd6c8959a33f4b5823358802,
      hash:d297d8189c1169babee32bcaab2c6d04,
      name:inputPersonaje.val()
    },
    success:appendHTML(respuesta)
  });
});


/* Función appendHTML que recibe la respuesta de la API como parámetro*/
function appendHTML(response){

  /*INGRESA AQUÍ EL CÓDIGO PARA REALIZAR EL PASO 7 DE LAS INSTRUCCIONES
  *
  *
  *
  *
  **/



/*-- ANIMACIÓN PROPIA DE LA VISTA, NO MODIFICAR --*/
  $('html, body').animate(
    {
      scrollTop: $("#page2").offset().top
    },1300, showNewSearch);
/*-- ------------------------------------------ --*/
}


/* FUNCIÓN DOCUMENT.READY */
$(function(){
  $(window).scrollTop(0)
  $('input[type="text"]').val('');
  $('.back-container').click(newSearchEvent);

})
