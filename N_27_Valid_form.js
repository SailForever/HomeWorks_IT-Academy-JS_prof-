/*
<form name=firstF action=https://fe.it-academy.by/TestForm.php novalidate>

Для внесения вашего сайта в каталог, заполните форму:<br>
Разработчики: <input type=text name=developers><b id=nameDevelopersFail style='color: red'></b><br>
Название сайта: <input type=text name=nameWeb><b id=nameWebFail style='color: red'></b><br>
URL сайта: <input type=text name=nameUrl><b id=nameUrlFail style='color: red'></b><br>
Дата запуска сайта: <input type=date name=dateWeb min="1996-01-01" max="2024-01-01"><b id=nameDateFail style='color: red'></b><br>
Посетителей в сутки: <input type=number name=namePersons min='0' max='1000'><b id=namePersonsFail style='color: red'></b><br>
E-mail для связи: <input type=email name=email placeholder='E-mail'><b id=nameEmailFail style='color: red'></b><br>
Рубрика каталога:
<select name=catalog>
<option disabled value=0 selected>выберите каталог</option>
<option value=1>здоровье</option>
<option value=2>домашний уют</option>
<option value=3>бытовая техника</option>
</select><b id=catalogFail style='color: red'></b><br>
Размещение:
<input type=radio name=answer value=1>бесплатное
<input type=radio name=answer value=2>платное
<input type=radio name=answer value=3>VIP<b id=nameRadioFail style='color: red'></b><br>
Разрешить отзывы: <input type=checkbox name=checked><b id=checkedFail style='color: red'></b><br>
Описание сайта: <br>
<textarea name=bigText></textarea><b id=bigTextFail style='color: red'></b><br>
<input type=submit name=done value='Отправить'>

</form>
*/



const formFirstF = document.forms.firstF;

const developersName = formFirstF.elements.developers;
const developersValue = developersName.value;
developersName.addEventListener('blur', (eo)=>developersBlur(false));
function developersBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const developersName = formFirstF.elements.developers;
  const developersValue = developersName.value;
  let bName = document.getElementById('nameDevelopersFail');
  let errors = 0;
  if ((developersValue.length > 40) || (developersValue.length < 5)) {
    bName.innerHTML = 'Введите пожалуйста Разработчиков не длиннее 40 символов и не менее 5 символов!';
    errors++;
    if (focusError)
      developersName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}


const webName = formFirstF.elements.nameWeb;
const webValue = webName.value;
webName.addEventListener('blur', (eo)=>webBlur(false));
function webBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const webName = formFirstF.elements.nameWeb;
  const webValue = webName.value;
  let bName = document.getElementById('nameWebFail');
  let errors = 0;
  if ((webValue.length > 30) || (webValue.length < 3)) {
    bName.innerHTML = 'Введите пожалуйста Название сайта не длиннее 30 символов и не менее 3 символов!';
    errors++;
    if (focusError)
      webName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}


const urlName = formFirstF.elements.nameUrl;
const urlValue = urlName.value;
urlName.addEventListener('blur', (eo)=>urlBlur(false));
function urlBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const urlName = formFirstF.elements.nameUrl;
  const urlValue = urlName.value;
  let bName = document.getElementById('nameUrlFail');
  let errors = 0;
  if ((urlValue.length > 25) || (urlValue.length < 5)) {
    bName.innerHTML = 'Введите пожалуйста URL сайта не длиннее 25 символов и не менее 5 символов!';
    errors++;
    if (focusError)
      urlName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}


const dataName = formFirstF.elements.dateWeb;
const dataValue = dataName.value;
dataName.addEventListener('blur', (eo)=>dateBlur(false));
function dateBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const dataName = formFirstF.elements.dateWeb;
  const dataValue = dataName.value;
  let bName = document.getElementById('nameDateFail');
  let errors = 0;
  if (dataValue.length<1) {
    bName.innerHTML = 'Введите пожалуйста дату запуска сайта!';
    errors++;
    if (focusError)
      dataName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}


const personName = formFirstF.elements.namePersons;
const personValue = personName.value;
personName.addEventListener('blur', (eo)=>personBlur(false));
function personBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const personName = formFirstF.elements.namePersons;
  const personValue = personName.value;
  let bName = document.getElementById('namePersonsFail');
  let errors = 0;
  if ((personValue.length > 4) || (personValue.length < 1)) {
    bName.innerHTML = 'Введите пожалуйста URL сайта не длиннее 1000 символов и не менее 0 символов!';
    errors++;
    if (focusError)
      personName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}

//email
const emailName = formFirstF.elements.email;
const emailValue = emailName.value;
emailName.addEventListener('blur', (eo)=>emailBlur(false));
function emailBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const emailName = formFirstF.elements.email;
  const emValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  let bName = document.getElementById('nameEmailFail');
  let errors=0;
  if (!(isEmailValid(emailName.value))) {
    bName.innerHTML = 'Введите пожалуйста E-mail содержащий символ @';
    errors++;
    if (focusError)
      emailName.focus();
  }
  else {
    bName.innerHTML = '';
  }
    function isEmailValid(value) {
      return emValid.test(value);
    }
  return errors;
}

//Радиоэлементы
var elemsRadio = formFirstF.elements.answer;
for (var i = elemsRadio.length - 1; i >= 0; i--) {
  const elemRadio = elemsRadio[i];
  elemRadio.addEventListener('click', ()=>validAnswer(elemRadio));
};
var errorsRadio= 0;
var bNameRadio = document.getElementById('nameRadioFail');
function validAnswer (elemRadio) {
  if (elemRadio.checked == true) {
    errorsRadio++;
    bNameRadio.innerHTML = '';
  }
  return errorsRadio;
};

//Рубрика каталога
const catalogName = formFirstF.elements.catalog;
const catalogValue = catalogName.value;
catalogName.addEventListener('change', (eo)=>catalogChange(false));
function catalogChange(focusError) {
  const formFirstF = document.forms.firstF;
  const catalogName = formFirstF.elements.catalog;
  const catalogValue = catalogName.value;
  let bName = document.getElementById('catalogFail');
  let errors = 0;
  if (catalogValue == 0) {
    bName.innerHTML = 'Выберите каталог!';
    errors++;
    if (focusError)
      catalogName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}

//Отзывы
const checkedName = formFirstF.elements.checked;
const checkedValue = checkedName.value;
checkedName.addEventListener('change', (eo)=>checkedChange(false));
function checkedChange(focusError) {
  const formFirstF = document.forms.firstF;
  const checkedName = formFirstF.elements.checked;
  let bName = document.getElementById('checkedFail');
  let errors = 0;
  if (checkedName.checked == false) {
    bName.innerHTML = 'Выберите каталог!';
    errors++;
    if (focusError)
      checkedName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}

//Описание сайта
const bigTextName = formFirstF.elements.bigText;
const bigTextValue = bigTextName.value;
bigTextName.addEventListener('blur', (eo)=>bigTextBlur(false));
function bigTextBlur(focusError) {
  const formFirstF = document.forms.firstF;
  const bigTextName = formFirstF.elements.bigText;
  const bigTextValue = bigTextName.value;
  let bName = document.getElementById('bigTextFail');
  let errors = 0;
  if ((bigTextValue.length > 5000) || (bigTextValue.length < 10)) {
    bName.innerHTML = 'Введите пожалуйста Описание сайта не длиннее 5000 символов и не менее 10 символов!';
    errors++;
    if (focusError)
      bigTextName.focus();
  }
  else {
    bName.innerHTML = '';
  }
  return errors;
}


//Кнопка отправить
formFirstF.addEventListener('submit',validateFirstF,false);

function validateFirstF (eo){
  eo = eo || window.event;
  let errorsAll=0;
  errorsAll+=developersBlur(!errorsAll);
  errorsAll+=webBlur(!errorsAll);
  errorsAll+=urlBlur(!errorsAll);
  errorsAll+=dateBlur(!errorsAll);
  errorsAll+=personBlur(!errorsAll);
  errorsAll+=emailBlur(!errorsAll);
  errorsAll+=catalogChange(!errorsAll);
  errorsAll+=checkedChange(!errorsAll);
  if (errorsRadio == 0) {
    eo.preventDefault();
    document.getElementById('nameRadioFail').innerHTML = 'Поставьте пожалуйста галочку!';
  }
  errorsAll+=bigTextBlur(!errorsAll);
  if (errorsAll) {
    eo.preventDefault();
  }
}