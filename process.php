<?php 
    $to = "lektati1@gmail.com";
    
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $headers .= "Content-type: text/html;\r\n";
    $headers .= "From: $email";

    mail($to, $subject, $message, $headers);
    echo "<script type='text/javascript'>alert('$name your message has been sent');</script>";
    header("Location: home.html");
?>