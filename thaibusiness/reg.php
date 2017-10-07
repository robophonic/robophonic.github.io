<?php 

$message = "Регистрация \n";
$message .= "Кнопка: {$_POST['hidden_info']} \n";
$message .= "Email: {$_POST['email']} \n";

$to = "robophonic02@gmail.com";
$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("Заявка")."?=";


$status = mail($to, $subject, $message); 

//header('Location: /thanks.html');
die(json_encode([
 'status' => 'success'
]));

?>