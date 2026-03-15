<?php

include "db.php";

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$username' AND password='$password'";

$result = $conn->query($sql);

if($result->num_rows > 0){

    header("Location: home.html");

}else{

    echo "Invalid login credentials";

}

?>