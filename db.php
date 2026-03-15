<?php

$conn = new mysqli("localhost","root","","question_portal");

if($conn->connect_error){
    die("Connection Failed");
}

?>