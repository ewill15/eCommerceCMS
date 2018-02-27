<?php
  $usuario = $_POST['usuario'];
  $password = $_POST['password'];

  if ($usuario == ""){
    echo "No se envio un nombre de usuario valido";
  }else{
    echo "Se recibieron los datos adecuadamente. El usuario ingresado fue ".$usuario;
  }
 ?>
