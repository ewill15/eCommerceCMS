<?php
  $Persona1 ='Pedro';
  $persona2 = 'Juan';
  $_persona3 = 'Maria';
/*
  echo $Persona1;
  echo $persona2;
  echo $_persona3;
  */
/*
  function getPersona(){
    global $Persona1;
    echo 'hola '.$Persona1;
  }
  $data = array(1, 1., NULL, new stdClass, 'foo',true);

  foreach ($data as $value) {
      echo gettype($value), "\n";
  }
  */
  $a=true;
  $b=2;
  $c=2.76;
  $d='d';
  $e=[3,5,6];
  $f=new stdClass();
  $g=NULL;

  echo " ".gettype($a);
  echo " ".gettype($b);
  echo " ".gettype($c);
  echo " ".gettype($d);
  echo " ".gettype($e);
  echo " ".gettype($f);
  echo " ".gettype($g);
 ?>
