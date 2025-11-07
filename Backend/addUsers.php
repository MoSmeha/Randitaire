<?php
include("./db.hp");


$data = json_decode(file_get_contents("php://input"), true);

if (isset($data["full_name"]) && $data["full_name"] != "") {
    $full_name = trim($data["full_name"]);
    //https://stackoverflow.com/questions/25628875/how-to-check-if-a-string-contains-only-letters-in-php
    if (!preg_match("/^[a-zA-Z ]+$/", $full_name)) {
        $response = [
            "success" => false,
            "error" => "full name should only have letters"
        ];
        echo json_encode($response);
        return;
    }
} else {
    $response = [
        "success" => false,
        "error" => "please input name"
    ];
    echo json_encode($response);
    return;
}

$score = rand(50, 365);
$time= rand(3,15);

$query = $mysql->prepare("INSERT INTO leaderboard(full_name, score, time) VALUES (?, ?, ?)");
$query->bind_param("sii", $full_name, $score, $time);

if ($query->execute()) {
    $response = ["success" => true];
} else {
    $response = [
        "success" => false,
        "error" => "Failed to add user"
    ];
}

echo json_encode($response);
?>
