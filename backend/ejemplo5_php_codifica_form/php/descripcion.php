<?php
$categoria = $_POST['categoria'];
$descripcion = $_POST['descripcion'];

if ($descripcion == ""){
  echo 'No se recibio una descripcion';
}else {
  echo 'Se recibieron los datos exitosamente';
}
?>
