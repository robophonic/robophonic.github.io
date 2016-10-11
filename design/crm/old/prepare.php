<?php
function CheckCurlResponse($code)
{
	$code=(int)$code;
	$errors=array(
		301=>'Moved permanently',
		400=>'Bad request',
		401=>'Unauthorized',
		403=>'Forbidden',
		404=>'Not found',
		500=>'Internal server error',
		502=>'Bad gateway',
		503=>'Service unavailable'
	);
	try
	{
		#Если код ответа не равен 200 или 204 - возвращаем сообщение об ошибке
		if($code!=200 && $code!=204)
			throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undescribed error',$code);
	}
	catch(Exception $E)
	{
		die('Ошибка: '.$E->getMessage().PHP_EOL.'Код ошибки: '.$E->getCode());
	}
}

function getVar($name)
{
	return isset($_POST[$name]) ? trim($_POST[$name]) : null;
}

$data=array(
	'firstname' => getVar('firstname'),
	'phone'     => getVar('phone'),
	'email'     => getVar('email')
);


$data['name'] = $data['firstname'];
$format = array('-', '+', '(', ')');
$data['phone'] = str_replace($format, '', $data['phone']);
#Если не указано имя или e-mail контакта - уведомляем
if(empty($data['name'])){
	// header('Location: /index.html');
	die('Не заполнено имя контакта');
}
if(empty($data['email'])) {
	// header('Location: /index.html');
	die('Не заполнен E-mail контакта');
}

header('Location: /thanks.html');
?>