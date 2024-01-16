<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "new_account";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["name"];
    $oldPassword = $_POST["old_pass"];
    $newPassword = $_POST["new_pass"];

    $sql = "SELECT * FROM account WHERE user_name='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        if (password_verify($oldPassword, $row["PASSWORD"])) {
            // Passwords match, update the password
            $hashedNewPassword = password_hash($newPassword, PASSWORD_DEFAULT);
            $updateSql = "UPDATE account SET PASSWORD='$hashedNewPassword' WHERE user_name='$username'";
            if ($conn->query($updateSql) === TRUE) {
                echo "<script>alert('Password updated successfully!');window.location.replace('login.html');</script>";
            } else {
                echo "Error updating password: " . $conn->error;
            }
        } else {
            echo "<script>alert('Invalid old password');window.location.replace('changepassword.html');</script>";
        }
    } else {
        echo "<script>alert('Invalid username');window.location.replace('changepassword.html');</script>";
    }
}

$conn->close();
?>
