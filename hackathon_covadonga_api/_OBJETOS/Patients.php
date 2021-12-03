<?php 

/*****************************************************************************************
 ****************************************************************************************
	* @Author: M.S.C. C. Eleazar Morales C.

	* @Datatime: Diciembre 01, 2021
	* @Proyect: Proyecto propuesta en Hackathon 
	* @Proyect_type: API 

	* Describe: Documento class to Patients Data Control. 
	
****************************************************************************************
*****************************************************************************************/

class Patients{
	
	private $xemc;
	private $tb = '"usuario"';

	public $id_patients;
	public $curp;
	public $last_name;
	public $last_surname;
	public $address;
	public $mail;
	public $password;
	
	public function __construct($db) {
		$this->xemc = $db;
	}

/**
 * [readAllData Method Patients data consult registed into database ]
 * @return [type] [Arr or row if data ]
 */
	function readAllData() {
		$xe = "SELECT * FROM
					" . $this->tb . " 
					ORDER BY id_patients DESC 
				";
		$row_data = $this->xemc->prepare($xe);
		$row_data->execute();
		return $row_data;
	}
	
/**
 * [createNewPatient Method Patients create new register into database]
 * @return [type] [return true if the transaction is create sussess.. or false if no is create]
 */
	function createNewPatient() {
        $_xe_insert  = 'INSERT INTO '. $this->tb . ' (
						  curp
						, name
						, last_name
						, last_surname
						, address
						, mail
						, password
	                	) 
                	VALUES(
	                	  :curp
						, :name
						, :last_name
						, :last_surname
						, :address
						, :mail
						, :password
	                ) '; 

		$stmt = $this->xemc->prepare($_xe_insert);

	    $this->curp 		= htmlspecialchars(strip_tags($this->curp));
		$this->name 		= htmlspecialchars(strip_tags($this->name));
		$this->last_name 	= htmlspecialchars(strip_tags($this->last_name));
		$this->last_surname = htmlspecialchars(strip_tags($this->last_surname));
		$this->address 		= htmlspecialchars(strip_tags($this->address));
		$this->mail 		= htmlspecialchars(strip_tags($this->mail));
		$this->password 	= htmlspecialchars(strip_tags($this->password));


	    $stmt->bindParam(":curp", $this->curp);
	    $stmt->bindParam(":name", $this->name);
	    $stmt->bindParam(":last_name", $this->last_name);
	    $stmt->bindParam(":last_surname", $this->last_surname);
	    $stmt->bindParam(":address", $this->address);
	    $stmt->bindParam(":mail", $this->mail);
	    $stmt->bindParam(":password", $this->password);
	    
		if($stmt->execute()) {
			return true;
		}
		return false;
	}

/**
 * [searchDataPatient Method Patients data foud by keyboard recived]
 * @param  [type] $keywords [Into data at API]
 * @return [type]           [Return arr - row data found in the dabatase]
 */
	function searchDataPatient($keywords) {
        $query = "
        	SELECT * FROM " . $this->tb . "
            WHERE 
            	curp LIKE ? or 
            	name LIKE ? or 
            	last_name LIKE ? or
            	last_surname LIKE ? or
            	address LIKE ? or
            	mail LIKE ? or
            	password LIKE ? 
        	ORDER BY id_patients DESC ";
		$stmt 		= $this->xemc->prepare($query);
		$keywords	= htmlspecialchars(strip_tags($keywords));
		$keywords 	= "%{$keywords}%";
		$stmt->bindParam(1, $keywords);
		$stmt->bindParam(2, $keywords);
		$stmt->bindParam(3, $keywords);
		$stmt->bindParam(4, $keywords);
		$stmt->bindParam(5, $keywords);
		$stmt->bindParam(6, $keywords);
		$stmt->bindParam(7, $keywords);
		$stmt->execute();
		return $stmt;
	}

/**
 * [consulDataById Method Patients data consult by identifier]
 * @return [type] [row data found ]
 */
	public function consulDataById() {
		$query ="
				SELECT * FROM " . $this->tb . " u
					WHERE id_patients = ? LIMIT 1 
				";
		$id_found = $this->xemc->prepare($query);
		$id_found->bindParam(1, $this->id_patients);
		$id_found->execute();
		$row = $id_found->fetch(PDO::FETCH_ASSOC);

		$this->idmdata 		= $row['id_patients'];
		$this->curp 		= $row['curp'];
		$this->name 		= $row['name'];
		$this->last_name 	= $row['last_name'];
		$this->last_surname = $row['last_surname'];
		$this->address 		= $row['address'];
		$this->mail 		= $row['mail'];
		$this->password 	= $row['password'];
	}

	
}

/**
 
id_patients
curp
name
last_name
last_surname
address
mail
password


  curp
, name
, last_name
, last_surname
, address
, mail
, password
            
 */	

?>