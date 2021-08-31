<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header('Content-Type: text/html; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
header("Content-type: application/json; charset=utf-8");
require_once('../../APIopenweatherapp/conexion/conexion.php');

require_once('./user-class.php');

if($_SERVER['REQUEST_METHOD'] == 'PUT'){
    $input = json_decode(file_get_contents("php://input"));
    var_dump($input);
    $user_id = $input->userId;
    $nomb= $input->nombre;
    $mail=$input->correo;
    $usuario=$input->usuario;
    $objUser= new User($pdo);
    $objUser->updateUser($user_id,$nomb, $mail, $usuario);

}else{
    echo 'error';
}
?>