<?php

require_once "vendor/autoload.php";
use PHPMailer\PHPMailer\PHPMailer;
//PHPMailer Object
$mail = new PHPMailer;

//Enable SMTP debugging. 
//$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "sumitahuja71@gmail.com";                 
$mail->Password = "sumit_ahuja_forgetit_23";                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to 
$mail->Port = 587;

//From email address and name
$mail->From = "sumitahuja71@gmail.com";
$mail->FromName = "Nishmit";

//To address and name
$mail->addAddress("sumitahuja71@gmail.com", "Sumit Ahuja");




//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Wedding RSVP";
$mail->Body = "<h4>Below are the guest details</h4><br><br>"
        . "Name - ".@$_REQUEST['Name']."<br>"
        . "Email - ".@$_REQUEST['Emailaddress']."<br>"
        . "Contact Number - ".@$_REQUEST['Contactnumber']."<br>"
        . "Attends - ".@$_REQUEST['attendiesDetails']."<br>"
        . "Guests - ".@$_REQUEST['guestDetails']."<br>"
        . "Message - ".@$_REQUEST['message']."<br><br><br>"
        . "Thanks";

$mail->send();
echo 1;