<?php
function my_plugin_function (){
	// Permitir ganchos en esta función do_action ( 'my_plugin_init');
	// Crear contenido $ content = 'Hola mundo';
	// Permitir que el contenido tenga filtros ejecutados en él
	// Asegúrese de almacenar el resultado devuelto del FILTRO !!! $ Content = apply_filters ( 'my_plugin_content', $ content);
}
?>