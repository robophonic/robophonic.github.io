var form = document.createElement('form');
form.classList.add('form');

var wrapper = document.querySelector('.wrapper');
wrapper.appendChild(form);

//заголовок
var ol = document.createElement('ol');
ol.classList.add('ol');
ol.innerHTML = 'Тест по програмированию';

form.appendChild(ol);

//подпункт
var li = document.createElement('li');
li.classList.add('li');
li.innerHTML = 'Вопрос №1';

ol.appendChild(li);

//вариант ответа
var label1 = document.createElement('label');
label1.classList.add('label1');

li.appendChild(label1);


var input = document.createElement('input');
input.classList.add('input');
input.type = 'radio';

label1.appendChild(input);


var span = document.createElement('span');
span.classList.add('span');
span.innerHTML = 'Вариант ответа №1';

label1.appendChild(span);

//вариант ответа 2
var label2 = label1.cloneNode(true);
label2.innerHTML = 'Вариант ответа №2';
li.appendChild(label2);


