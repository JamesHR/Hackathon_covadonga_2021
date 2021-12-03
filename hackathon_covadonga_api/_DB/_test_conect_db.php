<?php

/*****************************************************************************************
 ****************************************************************************************
    * @Author: M.S.C. C. Eleazar Morales C.

    * @Datatime: Diciembre 01, 2021
    * @Proyect: Proyecto propuesta en Hackathon

    * @Documento:  Test para la conectividad a la base de datos º_º
    
    * @return: return [ conn ]: ok or false 
****************************************************************************************
*****************************************************************************************/

    class Database {
        
        /**
        * @var Credencial: Crendencial de Base de Datos
        */
        
        private $host = "localhost";
        private $db_name = "hospital";
        private $username = "root";
        private $password = "";

        public $conn;

        /**
        *   @var Conectar: Método para conectar al servidor con la credencial definido 
        */
        public function getConnection() {
            $this->conn = null;
            try {
                $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
                
                $this->conn->exec("set names utf8");

            } catch(PDOException $exception) {
                echo "Connection error: " . $exception->getMessage();
            }
            return $this->conn;
        }
    }


    /*
        instanciación de la clase conexión a postgresql
    */
    
    
    $conexion = new Database();
    $conexion->getConnection();
    if($conexion->getConnection()==true){
        echo "conexion exitosa";
    }else{
        echo "no se pudo conectar";
    }

?>






