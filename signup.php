<?php

include "db.php";

$name = $_POST['name'];
$email = $_POST['email'];
$branch = $_POST['branch'];
$password = $_POST['password'];

$sql = "INSERT INTO users(name,email,branch,password)
VALUES('$name','$email','$branch','$password')";

if($conn->query($sql)){

echo "<script>window.location.href='project/frontpage.html';</script>";

}else{

echo "Error: ".$conn->error;

}

?>