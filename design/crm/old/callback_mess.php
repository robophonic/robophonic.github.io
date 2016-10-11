<?php 

$errors = [];



if (!empty($errors)) {
	die(json_encode($errors));
}

$data_callback = [
	"Отправитель"            => $data['firstname'],
	"Телефон"                => $data['phone']
];


$to = implode(",", [
	"adv@goit.com.ua ",
	"grooveit.official@gmail.com",
	"vadik.goncharov@gmail.com",
	"info@goit.com.ua",
	"i-v-a-n-n-a@mail.ru",
]);

$headers = "Content-type: text/plain;charset=utf-8"; 
$subject = "=?UTF-8?B?".base64_encode("Перезвоните мне!")."?=";

array_walk($data_callback, function(&$val, $key) {
	$val = "$key: $val";
});

$message = implode("\r\n", $data_callback);

$status = mail($to, $subject, $message); 
