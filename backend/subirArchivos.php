<?php
//direccion a subir imagen
$directorio = "";
//nombre de archivo  contenido en variable asociativa $_FILES
$nombreImagen = $_FILES["file"]["name"];
//nombre de archivo a subir
$archivo_a_subir = $directorio.basename($nombreImagen);
$tipoArchivo = pathinfo($archivo_a_subir,PATHINFO_EXTENSION);
$tamanio_archivo = $_FILES["file"]["size"];
$exito = true;
$respuestas;

if(file_exists($archivo_a_subir)){
  $respuestas['mensaje']="El archivo ya existe";
}

if($tamanio_archivo > 200000){
  $respuestas['mensaje']="El archivo es demasiado grande";
  $exito = false;
}

if ($tipoArchivo != "png" && $tipoArchivo != "jpg" && $tipoArchivo != "jpeg" && $tipoArchivo != "gif"){
  $respuestas["mensaje"] = "Solo se permiten archivos JPG,JPEG,PNG,GIF";
  $exito = false;
}
if($exito == false){
  $respuestas["mensaje"]="Lo sentimos, tu archivo no fue anadido";
}else{
  if(move_uploaded_file($_FILES["file"]["tmp_name"],$archivo_a_subir)){
    $respuestas["final"]="El archivo ".basename($nombreImagen)." ha sido agregado";
    $respuestas["mensaje"]="";
    $respuestas["newSource"]= $archivo_a_subir;
  }else{
    $respuestas["final"]="Lo sentimos, tu archivo no fue agregado";
  }
}

 ?>
