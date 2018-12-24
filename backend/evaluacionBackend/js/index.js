/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}

//funcion para inicializar los select
function init(){
  var tipos = [];
  var ciudades = [];
  $.get('data-1.json', function(data){
      for(let i = 0; i < data.length; i++){
          if(tipos.indexOf(data[i].Tipo) === -1) tipos.push(data[i].Tipo);
          if(ciudades.indexOf(data[i].Ciudad) === -1) ciudades.push(data[i].Ciudad);
      }
      for(let i = 0; i < ciudades.length; i++){
          $('#selectCiudad').append('<option value="'+ciudades[i]+'">'+ciudades[i]+'</option>');
      }
      for(let j = 0; j < tipos.length; j++){
          $('#selectTipo').append('<option value="'+tipos[j]+'">'+tipos[j]+'</option>');
      }
      $('select').material_select();
  });
}


//Inicializar sliders materialize al cargar todo el documento
$(document).ready(function(){
  inicializarSlider();
  init();
});

//Funcion para agregar y renderizar los resultados en la pagina
function showResult(array){
  var mostrarResultado = '.showResult';

  $(mostrarResultado).empty();
  for(let i=0; i<array.length; i++){
    ciudad = array[i].Ciudad;
    
    
    $(mostrarResultado).append(function(){
      $(this).append(`<div class="card horizontal">
      <div class="card-image" style="background-image:url('img/${array[i].Ciudad}.jpg')">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>
            <b>Dirección: </b>${array[i].Direccion}<br>
            <b>Ciudad: </b>${array[i].Ciudad}<br>
            <b>Teléfono: </b>${array[i].Telefono}<br>
            <b>Código Postal: </b>${array[i].Codigo_Postal}<br>
            <b>Tipo: </b>${array[i].Tipo}<br>
            <b>Precio: </b><span class="precioTexto">${array[i].Precio}</span>
          </p>
        </div>
        <div class="card-action">
          <a href="#" class="more">Ver mas</a>
        </div>
      </div>
    </div>`);   
    /*$.each(array,function(key,value){
      $(this).css('background-image','url(img/'+ciudad+'.jpg)');
    });*/
    
    });
    /*
     
    */
  }
}

//funcion para mostrar todos los resultados
$('#mostrarTodos').click(function(){
  $.get('data-1.json', function(data){
      showResult(data);
  });
});

//funcion para busqueda
$('#submitButton').click(function(){
  let ciudad = $('#selectCiudad option:selected').val();
  let tipo = $('#selectTipo option:selected').val();
  let precio = $('#rangoPrecio').val();

  //Simular llamada a base de datos en buscador.php con AJAX y metodo GET. No se tienen datos sensibles
  $.get('buscador.php', {ciudad:ciudad, tipo:tipo, precio:precio}, function(response){
      let data = JSON.parse(response);
      var r = data.data;
      showResult(r);
  });
});