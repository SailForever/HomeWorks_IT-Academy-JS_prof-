do {
  var fam=prompt('Введите фамилию');
} while (!isNaN(fam))

do {
  var name1=prompt('Введите имя');
} while (!isNaN(name1))

do {
  var otch=prompt('Введите отчество');
} while (!isNaN(otch))

do {
  var age1=prompt('Ваш возраст');
} while ((isNaN(age1)) || (!age1))
var age=parseInt(age1);

var gender=confirm('Если мужчина - ок, если женщина - отмена')
var gender1
var gender2
if (gender){
  if (age>=65) {
    gender1='мужской';
    gender2='да';
  }
  else {
    gender1='мужской';
    gender2='нет';
  }
}
else {
  if (age>=60) {
    gender1='женский';
    gender2='да';
  }
  else {
    gender1='женский';
    gender2='нет';
  }
}

alert(`Ваше ФИО: ${fam} ${name1} ${otch}
Ваш возраст в годах: ${age}
Ваш возраст в днях: ${age*365}
Через 5 лет вам будет: ${age+5}
Ваш пол: ${gender1}
Вы на пенсии: ${gender2}`)


