<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Content-Type: text/html; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
header("Content-type: application/json; charset=utf-8");
require_once('../../APIopenweatherapp/conexion/conexion.php');

class Mensaje
{
	private $sentencia;
	private $listarMensajes;
	private $listarMensaje;
	public $pdo;
    
	
	public function __construct($pdo)
	{
		$this->pdo=$pdo;
	}

	public function setMensaje($mensaje,$userId){
		
        $this->mensaje=$mensaje;
        $this->userId=$userId;

		$this->sentencia = $this->pdo->prepare("INSERT INTO `mensajes`(`mensaje`, `usuario_id`) VALUES ('$this->mensaje','$this->userId');");
		$this->sentencia->execute();
	}

	public function getMensajes(){
		$this->sentencia = $this->pdo->prepare("SELECT mensajes.mensaje, usuarios.nombre FROM mensajes INNER JOIN usuarios WHERE mensajes.usuario_id = usuarios.id");
		$this->sentencia->execute();
		$this->listaMensajes = $this->sentencia->fetchAll(PDO::FETCH_ASSOC);
		return $this->listaMensajes;
	}

	public function funciona(){
		echo('<h1>Está funcionando la clase</h1>');
	}
    
}


?>