$(document).ready(function() {
    $('select').material_select();

    $('.preloader-wrapper').hide()
    $( document ).ajaxStart(function() {
      $( ".preloader-wrapper" ).show();
    });
    $( document ).ajaxStop(function() {
      $( ".preloader-wrapper" ).hide();
    });

    var btnDescripcion = $('button[type="submit"]');
    btnDescripcion.click(function(event){
      event.preventDefault();
      descripcionAJAX();
    });

    function descripcionAJAX(){
      categoria = $('form.desc-form').find('input.select-dropdown').val();
      descripcion = $('form.desc-form').find('textarea#descripcion').val();
      $.ajax({
        url : 'php/descripcion.php',
        type: 'POST',
        data: {
          categoria:categoria,
          descripcion:descripcion
        }
      }).done(function(respuesta){
        alert(respuesta);
      });
    }
});
