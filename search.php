<?php

include "db.php";

$branch = $_POST['branch'];
$semester = $_POST['semester'];

$sql = "SELECT * FROM papers 
WHERE branch='$branch' 
AND semester='$semester'";

$result = $conn->query($sql);

while($row = $result->fetch_assoc()){

echo "Subject: ".$row['subject']."<br>";
echo "Year: ".$row['year']."<br>";

echo "<a href='".$row['file_path']."' download>Download PDF</a>";

echo "<br><br>";

}

?>