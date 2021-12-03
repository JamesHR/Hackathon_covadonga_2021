<?php
	header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET");
	header("Programador: M.S.C. Charly Eleazar Morales Constantino");
	header("Content-Type: application/json; charset=UTF-8");
/*****************************************************************************************
 ****************************************************************************************
	* @Author: M.S.C. Charly Eleazar Morales Constantino

	* @Datatime: June 17, 2021
	* @Proyect: Proyecto de Tesis [- Describe by CEMC-]
	* @Proyect_type: API 

	* @Document:  Método para el control de [ CONSULTAR ] todos los registros
	* @Method: [ GET ]
	
****************************************************************************************
*****************************************************************************************/

	include_once '../_DB/__database.php';
	include_once '../_OBJETOS/_Test.php';

	$database = new Database();
	$db = $database->getConnection();
	$test = new Test($db);
	
	$xe = $test->readAllData();
	$num = $xe->rowCount();
	if($num>0) {
		$arr = array();
		$arr["Datos"]=array();
		while ($row = $xe->fetch(PDO::FETCH_ASSOC)) {
			extract($row);
			$test_row=array(

				"id" => $id,
				"content" => $content,
				"fecha_reg" => $fecha_reg,
				"computer" => $computer,

			);
			array_push($arr["Datos"], $test_row);
		}
		http_response_code(200);
		echo json_encode($arr);
	} else {
		http_response_code(404);
		echo json_encode(array("Error" => "No se encontraron datos de prueba"));
	}
?>