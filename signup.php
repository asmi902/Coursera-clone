<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $contact = $_POST["contact"];
    $field = $_POST["field"];
    $password = $_POST["password"];
    
    // Check if any field is empty
    if (empty($name) || empty($email) || empty($contact) || empty($field) || empty($password)) {
        echo "All fields are required.";
    } else {
        // Establish database connection
        $conn = mysqli_connect("localhost", "root", "", "sign_up");
        
        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
        
        // SQL query to insert data into the database
        $sql = "INSERT INTO Reg (name, email, contact, field, password) 
                VALUES ('$name', '$email', '$contact', '$field', '$password')";

        // Execute SQL query
        if (mysqli_query($conn, $sql)) {
            // Redirect to login page if data insertion is successful
            header("Location: login.html"); 
            exit();
        } else {
            // Display error message if data insertion fails
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
        
        // Close database connection
        mysqli_close($conn);
    }
}
?>