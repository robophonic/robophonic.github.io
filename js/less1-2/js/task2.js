var names = new Array();

for (i = 0; i < 5; i++) {
  names[i] = prompt("Введите " + (i + 1) + "-ое имя");
}

var user = prompt('Введите имя пользователя', '');

for (i = 0; i < 5; i++) {
if (user == names[i]) {
   alert( (user) + ' вы успешно вошли' );
   if (user == names[i]) break;
} else {
  alert( 'А вот и неправильно!' ); 
  if (!user) break;
  if (user != names[i]) break;
}
}