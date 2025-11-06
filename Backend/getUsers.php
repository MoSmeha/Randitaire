<?php
include("db.php");
//wrap in try catch for tommorrow
$sql = "SELECT full_name, score, time from leaderboard ORDER BY score DESC, time ASC";

$stmt = $conn->prepare($sql);
$stmt->execute();

$result = $stmt->get_result();
$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
