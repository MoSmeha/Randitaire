<?php 

$db_host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "Randitaire";

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed: " . $conn->connect_error]));
}

?>