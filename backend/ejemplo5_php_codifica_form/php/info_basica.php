<?php
include '../c_Usuario.php';

$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$tipo_id=$_POST['tipo_id'];
$nro_id=$_POST['nro_id'];
$fecha_nacimiento=$_POST['fecha_nacimiento'];
$genero=$_POST['genero'];
$estado_civil=$_POST['estado_civil'];
$tipo_telefono=$_POST['tipo_telefono'];
$nro_telefono=$_POST['nro_telefono'];
$pais=$_POST['pais'];
$ciudad=$_POST['ciudad'];
$profile_img=$_POST['foto_perfil'];

$usuario = new Usuario($nombre, $apellido, $tipo_id, $nro_id, $fecha_nacimiento, $genero, $estado_civil, $tipo_telefono, $nro_telefono, $ciudad, $pais, $profile_img);

echo "Los datos del usuario $nombre $apellido han sido almacenados exitosamente";
 ?>
