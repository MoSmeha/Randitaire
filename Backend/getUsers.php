<?php
include("db.php");
try{
$sql = "SELECT full_name, score, time from leaderboard ORDER BY score DESC, time ASC";

$stmt = $conn->prepare($sql);
$stmt->execute();

$result = $stmt->get_result();
$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}


echo json_encode(["success"=>true,"data"=>$data]);
}catch (Exception $e){
$response["error"] = "error fetching users" . $e;
}

?>
