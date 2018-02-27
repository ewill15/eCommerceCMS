
<?php
#Categorías: Profesor, Estudiante, Padre.
#Módulos Profesor: Asignaturas, registro de notas, reuniones, tutorías.
#Módulos Estudiante: Asignaturas cursadas, registro de notas.
#Módulos Padre: Reuniones, registro de notas.
const CATEGORIAS = array('profesor','estudiante','padre');
const MODULO_PROFESOR = array('asignaturas','registro de Notas','reuniones','tutorias');
const MODULO_ESTUDIANTE = array('asignaturas cursadas','registro de Notas');
const MODULO_PADRE = array('reuniones','registro de Notas');

#Crea una variable que almacene el tipo de usuario que accede a la página, su valor puede ser profesor, estudiante o padre
$lista_tipos_usuario = array('profesor','estudiante','padre');
$tipoUsuario = $lista_tipos_usuario[2];
/*
Muestra el contenedor de la clase mod-container correspondiente de acuerdo al valor de la variable definida en el paso anterior.
Esto quiere decir que si la variable tiene el valor ‘profesor’ sólo se debe mostrar en la página el contenedor
que tenga el contenido del profesor.
La comparación de la variable se debe hacer con el arreglo de constantes Categorías.
*/
/*
Crea por medio de un ciclo los elementos option del select correspondientes a los módulos de cada tipo de usuario,
 recorriendo el arreglo de constantes correspondiente a cada categoría.
*/
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <!--Importar la fuente de los íconos de Google-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!--Importar la hojas de estilos de materialize css-->
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/customColors.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/index.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <title>Educación</title>
</head>
<body>
  <?php
  #var_dump (MODULO_PROFESOR) ;
  ?>
  <nav class="teal">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><i class="material-icons">school</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="">Configuración</a></li>
        <li><a href="">Ayuda</a></li>
        <li><a href="">Cerrar Sesión</a></li>
      </ul>
    </div>
  </nav>
  <div class="row">
    <div class="col s12">
      <h1>Mis Tareas</h1>
    </div>
  </div>
  <div class="container">
<?php
  if($tipoUsuario == CATEGORIAS[0]){
?>
    <div class="row mod-container">
      <div class="col s5">
        <div class="card">
          <div class="card-image">
            <img src="img/im1.jpg">
          </div>
        </div>
      </div>
      <div class="col s7">
        <h3>Módulo de profesor</h3>
        <p>
          En este módulo encuentras todo lo relacionado con tus cursos y clases; adicionalmente todas las opciones para registrar notas. ¿A qué módulo deseas acceder?
        </p>
        <form class="" action="index.html" method="post">
          <div class="input-field col s12">
             <select>
                 <option value=""></option>
                 <?php
                    foreach (MODULO_PROFESOR as $key => $value) {
                      echo "<option value=''>".$value."</option>";
                    }
                 ?>
             </select>
             <label class="teal-text">Módulo</label>
           </div>
        </form>
      </div>
    </div>
  <?php }elseif ($tipoUsuario == CATEGORIAS[1]) {
 ?>
    <div class="row mod-container">

      <div class="col s7">
        <h3>Módulo de estudiante</h3>
        <p>
          En este módulo encuentras todo lo relacionado con los cursos que estás tomando. ¿A qué módulo deseas acceder?
        </p>
        <form class="" action="index.html" method="post">
          <div class="input-field col s12">
             <select>
                 <option value=""></option>
                 <?php
                    foreach (MODULO_ESTUDIANTE as $key => $value) {
                      echo "<option value=''>".$value."</option>";
                    }
                 ?>
             </select>
             <label class="teal-text">Módulo</label>
           </div>
        </form>
      </div>
      <div class="col s5">
        <div class="card">
          <div class="card-image">
            <img src="img/im2.jpg">
          </div>
        </div>
      </div>
    </div>
    <?php
    }else{
    ?>
    <div class="row mod-container">
      <div class="col s5">
        <div class="card">
          <div class="card-image">
            <img src="img/im3.jpg">
          </div>
        </div>
      </div>
      <div class="col s7">
        <h3>Módulo Padre de familia</h3>
        <p>
          En este módulo encuentras todo lo relacionado con el seguimiento académico a tus hijos. ¿A qué módulo deseas acceder?
        </p>
        <form class="" action="index.html" method="post">
          <div class="input-field col s12">
             <select>
                 <option value=""></option>
                 <?php
                    foreach (MODULO_PADRE as $key => $value) {
                      echo "<option value=''>".$value."</option>";
                    }
                 ?>
             </select>
             <label class="teal-text">Módulo</label>
           </div>
        </form>
      </div>
    </div>
<?php
}
/*
Llena la lista de Grados en la parte inferior izquierda usando un ciclo diferente al usado en pasos anteriores.
Los grados deben mostrarse del 1 al 11
*/
?>
    <div class="row">
      <div class="col s2">
        <div class="collection">
            <?php
            $grado = 1;
            while($grado <= 11){
             ?>
             <a href="#" class="collection-item">Grado <?php echo $grado?></a>
             <?php $grado++;} ?>
        </div>
      </div>
      <?php
      /*
      Crea los días del calendario de 1 a 30 usando un ciclo diferente a los usados en pasos anteriores.
      */
      ?>
      <div class="card-panel col s10">
        <div class="calendar-container">
          <div class="days">
            <span>Domingo</span>
            <span>Lunes</span>
            <span>Martes</span>
            <span>Miercoles</span>
            <span>Jueves</span>
            <span>Viernes</span>
            <span>Sábado</span>
          </div>
          <?php
          $dia = 1;
          while($dia<=30){
          ?>
            <div class="calendar-item hoverable"><span><?php echo $dia; ?></span></div>
          <?php $dia++; } ?>
        </div>
      </div>

    </div>


  </div>



  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script type="text/javascript" src="js/materialize.min.js"></script>
  <script type="text/javascript" src="js/index.js"></script>
</body>
</html>
