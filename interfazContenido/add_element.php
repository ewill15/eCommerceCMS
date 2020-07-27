<?php
	add_action('admin_menu', 'my_new_plugin_add_admin_menu_item');
	function my_new_plugin_add_admin_menu_item(){
		 if (function_exists('add_submenu_page')) {
			 add_submenu_page('plugins.php', 'My New Plugin', 'My New Plugin', 10, 'my_new_plugin', 'my_new_plugin_admin_page_function');
		 }
	}
?>