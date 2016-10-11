<?php

function CreateToken() {
	$client = new HttpClient();
	$username = "goit.subscriptions@gmail.com";
	$password = "QAZwsx1@";

	$param = "SCOPE=ZohoCRM/crmapi&EMAIL_ID=".$username."&PASSWORD=".$password;
	$res = $client->post('https://accounts.zoho.com/apiauthtoken/nb/create', $param);
	$res = str_replace('#', ';', $res);
	$res = parse_ini_string($res);

	return $res;
}



?>