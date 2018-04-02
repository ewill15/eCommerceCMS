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
var buscar = $('input.button');
var URL = 'https://gateway.marvel.com';
var URL2 = '/v1/public/characters'
buscar.on('click',function(){
  $.ajax({
    url: URL+URL2,
    method: 'GET',
    datatype: 'json',
    data:{
      ts:'2160',
      apikey:'e88f028bfd6c8959a33f4b5823358802',
      hash:'695089938735ae309208798b0a97824d',
      name:inputPersonaje.val()
    },
    success:function(data){
      appendHTML(data)
    }

  });
});



/* Función appendHTML que recibe la respuesta de la API como parámetro*/
function appendHTML(response){

  var resultado = response.data.results;
  //INGRESA AQUÍ EL CÓDIGO PARA REALIZAR EL PASO 7 DE LAS INSTRUCCIONES

  var nombre = $("h2.nombre");
  var descripcion = $("p#descripcion");
  var imagen = $("img#image");
  var comics = $("ul#comics"),
      series = $("ul#series"),
      stories = $("ul#stories"),
      events = $("ul#events");
  var comics_size = resultado[0].comics.items.length,
      series_size = resultado[0].series.items.length,
      stories_size = resultado[0].stories.items.length,
      events_size = resultado[0].events.items.length;
  var dir_imagen = resultado[0].thumbnail.path,
      extension = resultado[0].thumbnail.extension

  nombre.empty().text(resultado[0].name);
  descripcion.empty().text(resultado[0].description);
  imagen.attr("src",dir_imagen+'.'+extension);
  var li_comics,li_series,li_stories,li_events='';

  for (i=0;i<comics_size;i++){
    li_comics += '<li>'+resultado[0].comics.items[i].name+'</li>';
  }
  for (i=0;i<series_size;i++){
    li_series += '<li>'+resultado[0].series.items[i].name+'</li>';
  }
  for (i=0;i<stories_size;i++){
    li_stories += '<li>'+resultado[0].stories.items[i].name+'</li>';
  }
  for (i=0;i<events_size;i++){
    li_events += '<li>'+resultado[0].events.items[i].name+'</li>';
  }

  comics.empty().append(li_comics);  
  series.empty().append(li_series);
  stories.empty().append(li_stories);
  events.empty().append(li_events);
  


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
