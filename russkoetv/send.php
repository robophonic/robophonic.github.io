<?php 

$message = "Регистрация \n";
//name каждого поля регистрации
$message .= "Name: {$_POST['name']} \n";
$message .= "Email: {$_POST['email']} \n";
$message .= "Message: {$_POST['message']} \n";

;
$to = "atk.advert@gmail.com";
$headers = "Content-type: text/plain;charset=utf-8"; 
//название письма
$subject = "=?UTF-8?B?".base64_encode("Заявка")."?=";


$status = mail($to, $subject, $message); 

die(json_encode([
 'status' => 'success'
]));

?>