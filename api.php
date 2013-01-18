<?php
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

require('config.php');

//Open DB
$col = 'mysql:host='.DB_HOST.';dbname='.DB_NAME;
$db = new PDO($col , DB_USERNAME, DB_PASSWORD);

switch($_REQUEST['name']){
	case 'getRistoranti':
		$ristoranti=array();
		$sql = 'SELECT * FROM ristoranti';  

		foreach($db->query($sql) as $row){  
			$ristoranti[]=array('nome'=>$row['nome'],'posizione'=>array('lat'=>$row['lat'],'lng'=>$row['lng']),'tipo'=>$row['tipo']);
		}
		echo @json_encode($ristoranti);
	break;
}