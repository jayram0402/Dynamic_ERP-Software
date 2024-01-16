<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "feedback";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $quality = $_POST["quality"];
    $suggestion = $_POST["suggestion"];
    
    // Corrected column name: Phone_no
    $sql = "INSERT INTO feed (Full_name, Email, Phone.no, Quality, Suggestion)
     VALUES (?, ?, ?, ?, ?)";

     $stmt = $conn->prepare("INSERT INTO feed (fname, email, phone, quality, suggestion) 
                            VALUES (?, ?, ?, ?, ?)");

    // Bind parameters
    $stmt->bind_param("sssss", $username, $email, $phone, $quality, $suggestion);

    if ($stmt->execute()) {
        echo "<script>alert('Registration successful!'); window.location.replace('feedbacksucces.html');</script>";
        // You may redirect to the login page or perform other actions
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
} else {
    echo "Invalid request method";
}

$conn->close();
?>


   