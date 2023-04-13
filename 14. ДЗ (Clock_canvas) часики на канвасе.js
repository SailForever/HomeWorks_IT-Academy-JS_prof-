/*

<form name=form1>
<input type=text name=diametr>
<input type=button value='построить часы' onclick='input()'>
</form>

<canvas id="Watch">

*/

function input() {
  const form1 = document.forms.form1
  const diam = parseFloat(form1.elements.diametr.value);
  if ((diam >= 200) && (diam <= 800)) {
    form1.style.display = 'none';
    hoursAll();
  }
}

function hoursAll() {
  const currTime = new Date();
  const currTimeStr = formatDateTime(currTime);

  const form1 = document.forms.form1;
  const diam = parseFloat(form1.elements.diametr.value);

  const cvsID = document.getElementById('Watch');

  //Большой круг
  const bigCircle = cvsID.getContext('2d');
  cvsID.width = diam;
  cvsID.height = diam;
  const radiusBig = diam / 2;
  const bigYX = diam / 2;
  bigCircle.fillStyle = '#F9D662';
  bigCircle.beginPath();
  bigCircle.arc(bigYX, bigYX, radiusBig, 0, Math.PI * 2, false);
  bigCircle.fill();

  //текст циферблата
  const textWatch = cvsID.getContext('2d');
  const textFontWatch = 0.08 * diam; // коэф размера текста главного времени от введенного числа
  const watchX = diam / 2;
  const watchY = (diam / 2) / 1.5;

  textWatch.fillStyle = 'black';
  textWatch.font = 'bold ' + textFontWatch + 'px Arial';
  textWatch.textAlign = 'center';
  textWatch.fillText(currTimeStr, watchX, watchY);

  //Маленькие кружки + текст в кружках
  var angle = 360 / 12; //получаем начальный градус для 1 кружка

  for (let i = 1; i <= 12; i++) {
    // кружки
    const smallCircle = cvsID.getContext('2d');
    const radiusSmall = 0.13 * diam / 2; // радиус маленького кружка от введенного числа

    const rad = 0.80 * radiusBig; // высчитано посредством подбора пикселей, расстояние от центра большого круга до центра малого
    const a = 180; // из радиан в градусы перевод
    const angleSum = angle / a * Math.PI;

    const smallCenterX = bigYX + rad * Math.sin(angleSum);
    const smallCenterY = bigYX - rad * Math.cos(angleSum);

    smallCircle.fillStyle = 'green';
    smallCircle.beginPath();
    smallCircle.arc(smallCenterX, smallCenterY, radiusSmall, 0, Math.PI * 2, false);
    smallCircle.fill();

    //текст
    const smallText = cvsID.getContext('2d');
    const textFont = 0.6 * radiusSmall; // 0.6 коэф размера текста от радиуса малого круга

    smallText.fillStyle = 'black';
    smallText.font = 'bold ' + textFont + 'px Arial';
    smallText.textAlign = 'center';
    smallText.textBaseline = 'middle';
    smallText.fillText(i, smallCenterX, smallCenterY);

    angle += 30;
  }

  //стрелки

  //секунды
  const arrow1 = cvsID.getContext('2d');
  const sec = currTime.getSeconds();
  const arrowSec = 360 / 60 * sec;
  const a = 180; // из радиан в градусы перевод
  const angleSumArr1 = arrowSec / a * Math.PI;

  const otstArr1 = (diam / 2) / 1.3;  //основная длина стрелки
  const tyle = (diam / 2) / (-15); //смещение в обратную сторону, короткая сторона стрелки
  const arrowXmoveArr1 = bigYX;
  const arrowYmoveArr1 = bigYX;

  const arrow1XlineTyle = bigYX + tyle * Math.sin(angleSumArr1);
  const arrow1YlineTyle = bigYX - tyle * Math.cos(angleSumArr1);

  const arrow1Xline = bigYX + otstArr1 * Math.sin(angleSumArr1);
  const arrow1Yline = bigYX - otstArr1 * Math.cos(angleSumArr1);

  const widthArr1=0.00625*diam;//ширина стрелки зависящая от введенного диаметра

  arrow1.lineCap = 'round';
  arrow1.strokeStyle = 'rgba(0, 0, 0, 0.8)';
  arrow1.lineWidth = widthArr1;
  arrow1.beginPath();
  arrow1.moveTo(arrowXmoveArr1, arrowYmoveArr1);
  arrow1.lineTo(arrow1XlineTyle, arrow1YlineTyle);
  arrow1.moveTo(arrowXmoveArr1, arrowYmoveArr1);
  arrow1.lineTo(arrow1Xline, arrow1Yline);
  arrow1.stroke();

  //минуты
  const arrow2 = cvsID.getContext('2d');
  const min = currTime.getMinutes();
  const arrowMin = 360 / 60 * (min + sec / 60);
  const angleSumArr2 = arrowMin / a * Math.PI;

  const otstArr2 = (diam / 2) / 1.8;
  const tyleArr2 = (diam / 2) / (-15);
  const arrow2Xmove = bigYX;
  const arrow2Ymove = bigYX;

  const arrow2XlineTyle = bigYX + tyleArr2 * Math.sin(angleSumArr2);
  const arrow2YlineTyle = bigYX - tyleArr2 * Math.cos(angleSumArr2);

  const arrow2Xline = bigYX + otstArr2 * Math.sin(angleSumArr2);
  const arrow2Yline = bigYX - otstArr2 * Math.cos(angleSumArr2);

  const widthArr2=0.01125*diam;//ширина стрелки зависящая от введенного диаметра

  arrow2.lineCap = 'round';
  arrow2.strokeStyle = 'rgba(0, 0, 0, 0.8)';
  arrow2.lineWidth = widthArr2;
  arrow2.beginPath();
  arrow2.moveTo(arrow2Xmove, arrow2Ymove);
  arrow2.lineTo(arrow2XlineTyle, arrow2YlineTyle);
  arrow2.moveTo(arrow2Xmove, arrow2Ymove);
  arrow2.lineTo(arrow2Xline, arrow2Yline);
  arrow2.stroke();

  //часы
  const arrow3 = cvsID.getContext('2d');
  const hour = currTime.getHours();
  const arrowHour = 360 / 12 * (hour + min / 60);
  const angleSumArr3 = arrowHour / a * Math.PI;

  const otstArr3 = (diam / 2) / 3;
  const tyleArr3 = (diam / 2) / (-15);
  const arrow3Xmove = bigYX;
  const arrow3Ymove = bigYX;

  const arrow3XlineTyle = bigYX + tyleArr3 * Math.sin(angleSumArr3);
  const arrow3YlineTyle = bigYX - tyleArr3 * Math.cos(angleSumArr3);

  const arrow3Xline = bigYX + otstArr3 * Math.sin(angleSumArr3);
  const arrow3Yline = bigYX - otstArr3 * Math.cos(angleSumArr3);

  const widthArr3=0.02125*diam;//ширина стрелки зависящая от введенного диаметра

  arrow2.lineCap = 'round';
  arrow2.strokeStyle = 'rgba(0, 0, 0, 0.8)';
  arrow2.lineWidth = widthArr3;
  arrow3.beginPath();
  arrow3.moveTo(arrow3Xmove, arrow3Ymove);
  arrow3.lineTo(arrow3XlineTyle, arrow3YlineTyle);
  arrow3.moveTo(arrow3Xmove, arrow3Ymove);
  arrow3.lineTo(arrow3Xline, arrow3Yline);
  arrow3.stroke();


  // заставляем часы работать точно
  const millsec = currTime.getMilliseconds();
  setTimeout(hoursAll, 1000 - millsec);

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