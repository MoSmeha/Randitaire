<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
$db_host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "Randitaire";

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
//test
if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

?>