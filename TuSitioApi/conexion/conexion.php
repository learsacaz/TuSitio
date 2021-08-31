<?php

$host = 'localhost';
$db = 'openweather';
$user = 'root';
$pass= '';

try {
	$connection = "mysql:host=".$host.";dbname=".$db.";charset=utf8";
	$options = [
		PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_EMULATE_PREPARES   => false
	];
	$pdo = new PDO($connection,$user,$pass,$options);
	return $pdo;
} catch (PDOException $e) {
	print_r('Error connection: ' . $e->getMessage());
}


?>