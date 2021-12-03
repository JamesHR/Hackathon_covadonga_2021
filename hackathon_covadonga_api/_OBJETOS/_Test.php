<?php 

/*****************************************************************************************
 ****************************************************************************************
	* @Author: M.S.C. C. Eleazar Morales C.

	* @Datatime: Diciembre 01, 2021
	* @Proyect: Proyecto propuesta en Hackathon 
	* @Proyect_type: API 

	* @Document:  Documento para el control de los datos de los usuarios dentro del sistema
	* 				[ USER_INFORMATION ]
	
	* @return: Retorna los datos del 
	*
	* Update: Jule 08, 2021:
	* Describe: Update data´s for table "User", the atribute´s is new update.
****************************************************************************************
*****************************************************************************************/

	
/**
*	@var Clase [ Usuario ] para manejar todos los datos del Objeto.
*/
class Test{
	/**
	* 	@var Conect: Varaible para conectar a la base de datos.
	*/
	private $xemc;
	
	/**
	* 	@var Tabla_User_Information: Nombre de la entidad a trabajar.
	*/	
	private $table_name = "_test";

	/**
	*	@var Variables_locales: Variables para los atributos de la entidad.
	*/
	public $id;
	public $content;
	public $fecha;
	public $computer;



	/**
	*	@var Construct Constructor con la variable [ $db ] para la conexión a la base de datos
	*/
	public function __construct($db) {
		$this->xemc = $db;
	}


	/**
	*	@var Method: Método para [ LEER ] todos los registros actuales en la tabla
	*	@return [$all_data] datos encontrados en el servidor
	*/
	function readAllData() {
		$sql = "SELECT * FROM
					" . $this->table_name ;

		$all_data = $this->xemc->prepare($sql);
		$all_data->execute();
		return $all_data;
	}
	

	
}


?>