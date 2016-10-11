<?php
error_reporting(-1);
header('Content-Type: text/html; charset=utf-8');
// $root=__DIR__.DIRECTORY_SEPARATOR;
require 'prepare_callback.php'; #Здесь будут производиться подготовительные действия, объявления функций и т.д.

require 'callback_mess.php'; 

require 'auth.php'; #Здесь будет происходить авторизация пользователя
require 'account_current.php'; #Здесь мы будем получать информацию об аккаунте
require 'fields_info_callback.php'; #Получим информацию о полях

require 'lead_add.php';
require 'note_add_callback.php';

require 'contacts_list_callback.php'; #Получим информацию о контактах



