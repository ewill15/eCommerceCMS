<?php
require 'clases.php';
$asignatura1 = new Asignatura('Mario',56,65,74);
$asignatura2 = new Asignatura('Juan',71,85,90);
$asignatura3 = new Asignatura('Rodrigo',35,69,45);
$asignatura4 = new Asignatura('Felicidad',54,68,78);
$asignatura5 = new Asignatura('Rosa',35,45,49);

$estudiante1 = new Estudiante('Felipe','primero',array('Matematicas','Literatura','Psicologia','Historia'));
$estudiante2 = new Estudiante('Juana','segundo',array('Literatura','Fisica','Quimica'));
$estudiante3 = new Estudiante('Maria','tercero',array('Historia','Biologia','Matematicas'));

$profesor = new Profesor('Guillermo',3);

$padre = new Padre('Edmundo',array($asignatura1,$asignatura2,$asignatura3,$asignatura4,$asignatura5));
 ?>
