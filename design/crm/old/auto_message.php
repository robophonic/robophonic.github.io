<?php 

$to_auto = $data['email'];

$headers = "Content-type: text/html; charset=utf-8 \r\n"; 
$subject_auto = "=?UTF-8?B?".base64_encode("Ваша заявка на курс GoQAOnline online принята. Ссылка на тест")."?=";

$message_auto = '<p> Привет, ' .$data['firstname']. '!</p>
<p> Мы рады, что тебя интересует IT направление и ты хочешь обрести новую профессию. Это очень интересное и перспективное направление, ты скоро сам об этом узнаешь.</p>
<p> Перед стартом занятий нам важно понимать на каком этапе развития в этом направлении ты сейчас находишься. </p>
<p> 
	Мы подготовили для тебя тест. Он состоит из трех уровней:<br>
	<ul>
		<li>Английский на понимание технической документации.</li>
		<li> Знания по QA (Этот блок не обязателен,но можешь проверить свои навыки).</li>
		<li> Базовая компьютерная грамотность.</li>
	</ul>
</p>
<p> Не так важно, насколько хороший будет результат, важнее то, чтобы мы могли дать тебе объективную обратную связь и стимул к подготовке до необходимого уровня. Мы очень хотим, чтобы курс был максимально эффективный и ты мог выжать максимум из него.</p>
<p>Поэтому в твоих же интересах быть максимально честным в своих ответах.  <br>
    Ссылка на тест <a href="https://goit.typeform.com/to/dVezmy">тут</a>!<br>
    После его прохождения, тебе придет на почту информация с результатами.
</p>
<p>
Желаем тебе успехов!<br>
С любовью,<br>
команда GoIT<br>
+38 067 326 95 92<br>
+38 093 343 21 25<br>
+38 050 366 57 77
</p>';

$status_auto = mail($to_auto, $subject_auto, $message_auto,  $headers); 
