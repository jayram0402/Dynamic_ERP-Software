<?php
// Establish a connection to the database
$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "bot";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch the user input and reply from the form
$text = $_POST['text'];
$reply = $_POST['replay'];

// Perform a database query to insert the reply
$query = "INSERT INTO chatbot (text, replay) VALUES ('$text', '$replay')";

if ($conn->query($query) === TRUE) {
    echo "Reply added successfully!";
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
}

$conn->close();
?>
