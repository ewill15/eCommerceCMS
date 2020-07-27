<?php

  class Persona
  {
    public $nombre;
    public $rol;
    public $edad;

    function __construct($nombre, $rol, $edad)
    {
      $this->nombre = $nombre;
      $this->rol = $rol;
      $this->edad = $edad;
    }

    function saludar_todos(){
      echo "Hola a todos<br>";
    }

    function saludar_a(Persona $persona){
      echo "Hola ".$persona->nombre.", ¿cómo estas?<br>";
    }


  }

  $yo = new Persona('Juan', 'yo', 20);
  $papa = new Persona('Carlos', 'papá', 40);
  $mama = new Persona('Maria', 'mamá', 40);
  $primo = new Persona('Luis', 'primo', 30);
  $tio = new Persona('Jose', 'tio', 45);

  echo "Nombre: ".$yo->nombre.", Rol: ".$yo->rol.", Edad: ".$yo->edad."<br>";
  echo "Nombre: ".$papa->nombre.", Rol: ".$papa->rol.", Edad: ".$papa->edad."<br>";
  echo "Nombre: ".$mama->nombre.", Rol: ".$mama->rol.", Edad: ".$mama->edad."<br>";
  echo "Nombre: ".$primo->nombre.", Rol: ".$primo->rol.", Edad: ".$primo->edad."<br>";
  echo "Nombre: ".$tio->nombre.", Rol: ".$tio->rol.", Edad: ".$tio->edad."<br>";

  $yo->saludar_todos();
  $papa->saludar_todos();

  $mama->saludar_a($papa);
  $primo->saludar_a($yo);
  $tio->saludar_a($mama);

 ?>
