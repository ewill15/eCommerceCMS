<?php
/**
 *  clase Asignatura
 */
class Asignatura
{
  private $nombre;
  private $nota1;
  private $nota2;
  private $nota3;

  function __construct($nombre,$nota1,$nota2,$nota3){
      $this->setNombre($nombre);
      $this->setNota1($nota1);
      $this->setNota2($nota2);
      $this->setNota3($nota3);
  }
  public getNombre(){
    return $this->nombre;
  }
  public setNombre($nombre){
    $this->nombre = $nombre;
  }
  public getNota1(){
    return $this->nota1;
  }
  public setNota1($nota1){
    $this->nota1 = $nota1;
  }
  public getNota2(){
    return $this->nota2;
  }
  public setNota2($nota2){
    $this->nota2 = $nota2;
  }
  public getNota3(){
    return $this->nota3;
  }
  public setNota3($nota3){
    $this->nota3 = $nota3;
  }
  public promedio(){
    return ($this->nota1+$this->nota2+$this->nota3)/3;
  }
}

/**
 * clase Estudiante
 */
class Estudiante
{
  private $nombre;
  private $curso;
  private $asignaturas=array();
  function __construct($nombre,$curso,$asignatura)
  {
    $this->setNombre($nombre);
    $this->setCurso($curso);
    $this->setAsignaturas($asignatura);
  }
  function getNombre(){
    return $this->nombre;
  }
  function setNombre($nombre){
    $this->nombre = $nombre
  }
  function getCurso(){
    return $this->curso;
  }
  function setCurso($curso){
    $this->curso = $curso;
  }
  function getAsignaturas(){
    return $this->asignaturas;
  }
  function setAsignaturas($asignaturas){
    foreach ($asignaturas as $key => $valor) {
      array_push($this->asignaturas,$valor);
    }
  }
}
/**
 * clase profesor
 */
class Profesor
{
  private $nombre;
  private $estudiante=array();
  function __construct($nombre)
  {
    $this->setNombre($nombre);
  }
  function getNombre(){
    return $this->nombre;
  }
  function setNombre($nombre){
    $this->nombre = $nombre;
  }
  function getEstudiante(){
    return $this->estudiante;
  }
}

/**
 * clase padre
 */
class Padre
{
  private $nombre;
  private $hijos = array();
  function __construct($nombre,$hijos)
  {
    $this->getNombre($nombre);
    $this->setHijo($hijos);
  }
  function getNombre(){
    return $this->nombre;
  }
  function setNombre($nombre){
    $this->nombre = $nombre;
  }
  function getHijos(){
    return $this->hijos;
  }
  function setHijo($estudiante){
    array_push($this->hijos,$estudiante);
  }
}



?>
