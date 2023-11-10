<?php
/**
 * EasyPHP : a complete WAMP environment for PHP developers 
 * including PHP, Apache, MySQL, PhpMyAdmin, Xdebug...
 *
 * PHP version 5
 *
 * @author   Laurent Abbal <laurent@abbal.com>
 * @license  http://www.gnu.org/licenses/gpl-2.0.html  GPL License 2 
 * @link     http://www.easyphp.org
 */

// Parameters
$parameters_mgmt = array(
	'default-storage-engine'	=> array(
		'name'			=>	'default storage engine',
		'values'		=>	array('INNODB','MYISAM'),
		'description'	=>	'MySQL supports several storage engines that act as handlers for different table types.<br /><b>Default value: INNODB</b>'
		),
);

// Read my.ini -> array
$source = $easyphp_path . "conf_files\my.ini";
$myini = file_get_contents($source);
$myini_array = explode("\r\n", $myini);
$parameters_ini = array();
foreach ($myini_array as $value){
	if ((substr($value,0,1) != "#") AND (substr($value,0,1) != "[")  AND (substr($value,0,1) != "") AND (strstr($value,"="))){
		$parameter = explode("=", $value);
		$parameters_ini = $parameters_ini + array(trim($parameter[0]) => trim($parameter[1]));
	}
}

$action = "http://" . $_SERVER['HTTP_HOST'] . "/home/" . $file . "myinimanager_update.php";	
?>

<form method="post" action="<?php echo $action; ?>">
	<?php
	foreach ($parameters_mgmt as $parameter_mgmt => $parameter_mgmt_array){
		echo '<div style="width:100%;padding:0px 0px 0px 0px;margin:0px;">';
		echo '<div style="float:left;width:110px;text-align:right;padding:5px;margin:0px;font-family:courrier;font-size:13px;color:#3F3F3F;">' . $parameter_mgmt_array['name'] . '</div>';
		echo '<div style="float:left;width:170px;padding:6px 5px 5px 5px;margin:0px;text-align:left;">';
		echo '<select name="' . $parameter_mgmt . '" style="width:140px;">';
		foreach ($parameter_mgmt_array['values'] as $value){
			$selected = ($parameters_ini[$parameter_mgmt]==$value)?'selected="selected"':'';
			echo '<option ' . $selected . ' value="'.$value.'">'.$value.'</option>';
		}
		echo '</select>';
		echo '</div>';
		echo '<div style="float:left;width:220px;padding:5px;margin:0px;font-style:italic;color:gray;text-align:left;">' . $parameter_mgmt_array['description'] . '</div>';
		echo '<br style="clear:both">';
		echo '</div>';
	}
	?>
	
	<div style="width:500px;padding:5px;margin:10px auto 0px auto;border:1px solid #EFCE1D;background-color:#FBD825;color:#895902;-moz-border-radius:2px;-khtml-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;">
		<?php echo $t_warning_phpini; ?>
	</div>

	<input type="submit" value="<?php echo $t_warning_save; ?>" class="submit" />
</form>
<br />