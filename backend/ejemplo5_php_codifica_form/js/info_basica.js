$(function(){
  $('select').material_select();
  $('.datepicker').pickadate({
  selectMonths: true,
  selectYears: 200,
  months_full: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
  months_short: [ 'En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
  weekdays_full: [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado' ],
  weekdays_short: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
});
  $('.preloader-wrapper').hide()
  $( document ).ajaxStart(function() {
    $( ".preloader-wrapper" ).show();
  });
  $( document ).ajaxStop(function() {
    $( ".preloader-wrapper" ).hide();
  });

  var btnInfoBasica = $('button[type="submit"]');
  btnInfoBasica.click(function(event){
    event.preventDefault();
    infoBasicaAJAX();
  });
  function infoBasicaAJAX(){
    nombre = $('form.desc-form').find('input[name="nombre"]').val();
    apellido = $('form.desc-form').find('input[name="apellido"]').val();
    tipo_identificacion= $('form.desc-form').find('input.select-dropdown').val();
    nro_identificacion= $('form.desc-form').find('input[name="identificacion"]').val();
    fecha_nacimiento= $('form.desc-form').find('input[name="fecha_nacimiento"]').val();
    genero =  $('input:radio[name=genero]:checked').val();
    estado_civil = $("[name='estado_civil']").val();
    tipo_telefono = $("[name='tipo_telefono']").val();
    nro_telefono = $("[name='telefono']").val();
    pais_residencia = $("[name='pais']").val();
    ciudad_residencia = $("[name='ciudad']").val();
    profile_img = $('form.desc-form').find('input[name="profile-img"]').val();



    $.ajax({
      url : 'php/info_basica.php',
      type: 'POST',
      data: {
        nombre:nombre,
        apellido:apellido,
        tipo_id:tipo_identificacion,
        nro_id:nro_identificacion,
        fecha_nacimiento:fecha_nacimiento,
        genero:genero,
        estado_civil:estado_civil,
        tipo_telefono:tipo_telefono,
        nro_telefono:nro_telefono,
        pais:pais_residencia,
        ciudad:ciudad_residencia,
        foto_perfil:profile_img
      }
    }).done(function(respuesta){
      alert(respuesta);
    });
  }

})
