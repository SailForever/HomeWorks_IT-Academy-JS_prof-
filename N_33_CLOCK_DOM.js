/*

<style>
.classDiv1 {
  border-radius: 50%;
  background-color: #F9D662;
  position: absolute;
}
.classDivMany {
  border-radius: 50%;
  background-color: green;
  position: absolute;
}
.classDivManySpan {
  display: block;
  margin-top: 35%;
  text-align: center;
}
.classTimeFirst {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: block;
  margin-top: 30%;
  font-size: 24px;
  font-weight: bold;
}
.classTimeArrow1 {
  border-radius: 30%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  animation: rotate 6s linear infinite;
  transform-origin: top left;
}
.classTimeArrow2 {
  border-radius: 30%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  animation: rotate 6s linear infinite;
  transform-origin: top left;
}
.classTimeArrow3 {
  border-radius: 30%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  animation: rotate 6s linear infinite;
  transform-origin: top left;
}
</style>

*/
/*
<form name=form1>
<input type=text name=diametr>
<input type=button value='построить часы' onclick='input()'>
</form>
*/


function input() {
  const form1 = document.forms.form1
  const diam = parseFloat(form1.elements.diametr.value);
  console.log(diam)
  if ((diam >= 200) && (diam <= 800)) {
    form1.style.display = 'none';
    hoursAll();
  }
}


function hoursAll() {
  const form1 = document.forms.form1
  const diam = parseFloat(form1.elements.diametr.value);

  const margPx = 8; //стандартный отступ 8px

  const radius = 0.36*diam; //0,36 высчитано посредством подбора пикселей, расстояние от центра большого круга до центра малого
  var angle = 30; // градусы поворота кружков (для цикла)
  const a = 180; // из радиан в градусы перевод

  const div1 = document.createElement('div');
  div1.id = 'div1';
  div1.className = 'classDiv1';
  div1.style.width=diam+'px';
  div1.style.height=diam+'px';
  document.body.prepend(div1);

  const idDiv1 = document.getElementById('div1');
  const div1CenterX = idDiv1.offsetLeft + idDiv1.offsetWidth / 2;
  const div1CenterY = idDiv1.offsetTop + idDiv1.offsetHeight / 2;

  for (let i = 1; i <= 12; i++) {
    const form1 = document.forms.form1
    const diam = parseFloat(form1.elements.diametr.value);

    const divMany = document.createElement('div');
    const kfDiam=0.13; //коэф для получения диаметра малого круга от большого круга
    divMany.id = i;
    divMany.className = 'classDivMany';
    idDiv1.appendChild(divMany);

    const angleSum = angle / a * Math.PI;

    const idDivMany = document.getElementById(divMany.id = i);

    const idDivManySpan = document.createElement('span');
    const fontSpan=0.036; // подобран коэф от кружочка, который в цикле, для величины шрифта
    idDivManySpan.innerText = i;
    idDivManySpan.className = 'classDivManySpan';
    idDivManySpan.style.fontSize=fontSpan*diam+'px';
    idDivMany.appendChild(idDivManySpan);

    const divManyCenterX = div1CenterX + radius * Math.sin(angleSum);
    const divManyCenterY = div1CenterY - radius * Math.cos(angleSum);

    idDivMany.style.width=kfDiam*diam + 'px';
    idDivMany.style.height=kfDiam*diam + 'px';

    idDivMany.style.left = Math.round(divManyCenterX - idDivMany.offsetWidth / 2) - margPx + 'px';
    idDivMany.style.top = Math.round(divManyCenterY - idDivMany.offsetHeight / 2) - margPx + 'px';

    angle += 30;
  }

  const timeFirst = document.createElement('div');
  timeFirst.id = 'timeFirst';
  timeFirst.className = 'classTimeFirst';
  div1.appendChild(timeFirst);

  const timeArrow1 = document.createElement('div');
  timeArrow1.id = 'timeArrow1';
  timeArrow1.className = 'classTimeArrow1';
  div1.appendChild(timeArrow1);
  const widthArr1=0.006*diam;///высчитано посредством подбора визуальной эстетики ширины стрелки, зависит от диаметра
  const heightArr1=0.48*diam;//высчитано посредством подбора визуальной эстетики высоты стрелки, зависит от диаметра
  timeArrow1.style.width=widthArr1+'px';
  timeArrow1.style.height=heightArr1+'px';
  timeArrow1.style.left = div1CenterX - margPx + 'px';
  timeArrow1.style.top = div1CenterY - margPx + 'px';

  const timeArrow2 = document.createElement('div');
  timeArrow2.id = 'timeArrow2';
  timeArrow2.className = 'classTimeArrow2';
  div1.appendChild(timeArrow2);
  const widthArr2=0.016*diam;//высчитано посредством подбора визуальной эстетики ширины стрелки, зависит от диаметра
  const heightArr2=0.45*diam;//высчитано посредством подбора визуальной эстетики высоты стрелки, зависит от диаметра
  timeArrow2.style.width=widthArr2+'px';;
  timeArrow2.style.height=heightArr2+'px';
  timeArrow2.style.left = div1CenterX - margPx + 'px';
  timeArrow2.style.top = div1CenterY - margPx + 'px';

  const timeArrow3 = document.createElement('div');
  timeArrow3.id = 'timeArrow3';
  timeArrow3.className = 'classTimeArrow3';
  div1.appendChild(timeArrow3);
  const widthArr3=0.028*diam;//высчитано посредством подбора визуальной эстетики ширины стрелки, зависит от диаметра
  const heightArr3=0.32*diam;//высчитано посредством подбора визуальной эстетики высоты стрелки, зависит от диаметра
  timeArrow3.style.width=widthArr3+'px';
  timeArrow3.style.height=heightArr3+'px';
  timeArrow3.style.left = div1CenterX - margPx + 'px';
  timeArrow3.style.top = div1CenterY - margPx + 'px';


  updateTime()

  function updateTime() {
    const currTime = new Date();
    const currTimeStr = formatDateTime(currTime);
    document.getElementById('timeFirst').innerHTML = currTimeStr;

    const sec = currTime.getSeconds();
    const somePx=12;//сдвигает стрелку на 12px (12=12px и так далее)
    const arrowSec = 360 / 60 * sec;
    const translDiamArrWid1=-widthArr1/2+'px'; //переносит стрелку в середину своей толщины
    const translDiamArrHei1=-heightArr1+somePx+'px'; //переносит стрелку на несколько пикселей, зависит от высоты стрелки, а больше от диаметра
    timeArrow1.style.transform = 'rotate(' + arrowSec + 'deg) translate('+translDiamArrWid1+','+translDiamArrHei1+')';
    const min = currTime.getMinutes();
    const arrowMin = 360 / 60 * (min + sec / 60);
    const translDiamArrWid2=-widthArr2/2+'px'; ///переносит стрелку в середину своей толщины
    const translDiamArrHei2=-heightArr2+somePx+'px'; //переносит стрелку на несколько пикселей, зависит от высоты стрелки, а больше от диаметра
    timeArrow2.style.transform = 'rotate(' + arrowMin + 'deg) translate('+translDiamArrWid2+','+translDiamArrHei2+')';
    const hour = currTime.getHours();
    const arrowHour = 360 / 12 * (hour + min / 60);
    const translDiamArrWid3=-widthArr3/2+'px'; //переносит стрелку в середину своей толщины
    const translDiamArrHei3=-heightArr3+somePx+'px'; //переносит стрелку на несколько пикселей, зависит от высоты стрелки, а больше от диаметра
    timeArrow3.style.transform = 'rotate(' + arrowHour + 'deg) translate('+translDiamArrWid3+','+translDiamArrHei3+')';

    const millsec = currTime.getMilliseconds();
    setTimeout(updateTime, 1000 - millsec);
  }
  // форматирует дату-время в формате чч:мм:сс
  function formatDateTime(dt) {
    const hours = dt.getHours();
    const minutes = dt.getMinutes();
    const seconds = dt.getSeconds();
    return str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2);
  }

  // дополняет строку val слева нулями до длины Len
  function str0l(val, len) {
    let strVal = val.toString();
    while (strVal.length < len)
      strVal = '0' + strVal;
    return strVal;
  }
}