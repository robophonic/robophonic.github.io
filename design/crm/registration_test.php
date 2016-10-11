<?php
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
$root=__DIR__.DIRECTORY_SEPARATOR;
require $root.'prepare.php'; #Здесь будут производиться подготовительные действия, объявления функций и т.д.

require $root.'mail.php'; 
require $root.'auto_message.php'; 
require $root.'sample-client.php'; #alpha_sms

require $root.'auth.php'; #Здесь будет происходить авторизация пользователя
require $root.'account_current.php'; #Здесь мы будем получать информацию об аккаунте
require $root.'fields_info.php'; #Получим информацию о полях

require $root.'lead_add_test.php';
require $root.'note_add.php';

require $root.'contacts_list.php'; #Получим информацию о контактах
// require $root.'contact_add.php'; #Здесь будет происходить добавление контакта



