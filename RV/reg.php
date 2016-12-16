<?php 

$message = "Письмо резюме: \n";
$message .= "Имя: {$_POST['name']} \n";
$message .= "Email: {$_POST['email']} \n";
$message .= "Сообщение: {$_POST['message']} \n";
// $message .= "Skype: {$_POST['skype']} \n";

$to = "robophonic02@gmail.com";
$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("Письмо резюме")."?=";


$status = mail($to, $subject, $message); 
//header('Location: /thanks.html');
die(json_encode([
 'status' => 'success'
]));

?>