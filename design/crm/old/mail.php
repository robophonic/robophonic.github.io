<?php 

$to = implode(",", [
	"info@goit.com.ua",
	"grooveit.official@gmail.com",
]);

$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("Заявка на регистрацию GoQAOnline")."?=";

$send_data = $data;
// unset($send_data['name']);

array_walk($send_data, function(&$val, $key) {
	$val = "$key: $val";
});

$message = implode("\r\n", $send_data);

$status = mail($to, $subject, $message); 


