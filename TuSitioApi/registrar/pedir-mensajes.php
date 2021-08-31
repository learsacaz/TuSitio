<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Content-Type: text/html; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
header("Content-type: application/json; charset=utf-8");
require_once('../../APIopenweatherapp/conexion/conexion.php');

require_once('./mensaje-class.php');

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $input = json_decode(file_get_contents("php://input"));
    
    $objMensaje= new Mensaje($pdo);
    $objMensaje->getMensajes();
    $res = json_encode($objMensaje);
    echo($res);
    

}else{
    echo 'error';
}
?>