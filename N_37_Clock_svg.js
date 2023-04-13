/*<form name=form1>
<input type=text name=diametr>
<input type=button value='построить часы' onclick='input()'>
</form>

<object id=AllCircle data='SVG_HW/All.svg' type="image/svg+xml"></object>

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
  const form1 = document.forms.form1
  const diam = parseFloat(form1.elements.diametr.value);

  const AllCircle = document.getElementById('AllCircle'); //Находим тег object
  
  //Большой круг
  const bigCircleSvg = AllCircle.contentDocument; // находим под-документ
  console.log(bigCircleSvg);

  const circle = bigCircleSvg.getElementById("BigCircle");
  const svgTag = bigCircleSvg.getElementById("svgID");
  const radius=diam/2; //получает радиус от введенного числа
  const widHeig=radius*2; //получаем оптимальную ширину или высоту для расположения свг
  const cxBigCirc=radius;
  const cyBigCirc=radius;
  svgTag.setAttribute('width',widHeig);
  svgTag.setAttribute('height',widHeig);
  circle.setAttribute("cx",cxBigCirc);
  circle.setAttribute("cy",cyBigCirc);
  circle.setAttribute("r",radius);
  circle.setAttribute("display",'');

  //Маленькие кружки
  const smallCircleSvg = AllCircle.contentDocument; // находим под-документ
  console.log(smallCircleSvg);
  
  var angle = 30; // градусы поворота кружков (для цикла)
  const radiusSmall = 0.065 * diam; // получаем радиус от введенного диаметра

  const textFont=0.6*radiusSmall; // 0.6 коэф размера текста от диаметра малого круга

  for (let i = 1; i <= 12; i++) {
    const circleSmall = smallCircleSvg.getElementById("SmallCircle" + i);
    const textSmall = smallCircleSvg.getElementById("text" + i);

    const bigCenterX=radius; // радиус - это центр круга
    const bigCenterY=radius; // радиус - это центр круга
    const rad=0.80*radius; // высчитано посредством подбора пикселей, расстояние от центра большого круга до центра малого
    const a = 180; // из радиан в градусы перевод
    const angleSum = angle / a * Math.PI;

    const smallCenterX = bigCenterX + rad * Math.sin(angleSum);
    const smallCenterY = bigCenterY - rad * Math.cos(angleSum);

    const kfY=3;//коэф для вектора Y в малом кругу для текста

    const textCenterY=(bigCenterY - rad * Math.cos(angleSum))+textFont/kfY;

    circleSmall.setAttribute("cx", smallCenterX);
    circleSmall.setAttribute("cy", smallCenterY);
    circleSmall.setAttribute("r", radiusSmall);
    circleSmall.setAttribute("fill", "green");
    circleSmall.setAttribute("display", '');

    textSmall.setAttribute("x", smallCenterX);
    textSmall.setAttribute("y", textCenterY);
    textSmall.setAttribute("display", '');
    textSmall.setAttribute("font-size", textFont);

    angle += 30;
  }

  //Главный циферблат
  const timeFirstTag = AllCircle.contentDocument;

  const timeFirstY=0.65*cyBigCirc; // высчитано посредством подбора расстояния, расстояние от центра большого круга до центра циферблата
  const textFontTime=0.08*diam; // коэф размера текста главного времени от введенного числа

  const timeFirst=timeFirstTag.getElementById('timeFirst');
  timeFirst.setAttribute("x",cxBigCirc);
  timeFirst.setAttribute("y",timeFirstY);
  timeFirst.setAttribute("fill",'#000000');
  timeFirst.setAttribute("font-family",'serif');
  timeFirst.setAttribute("font-size",textFontTime);
  timeFirst.setAttribute("text-anchor",'middle');
  timeFirst.setAttribute("xml:space",'preserve');

  updateTime()

  function updateTime() {
    const currTime = new Date();
    const currTimeStr = formatDateTime(currTime);
    
    const timeFirstTag = AllCircle.contentDocument;
    timeFirstTag.getElementById('timeFirst').innerHTML = currTimeStr;

    //Стрелки
    const arrows = AllCircle.contentDocument;
    
    const yArrRot=cxBigCirc-10//смещение точки вращения стрелки

    const sec = currTime.getSeconds();
    const arrowSec = 360 / 60 * sec;
    const arrow1=arrows.getElementById('Arrow1');
    const y2Arr1=diam*0.4375; //кэф (длины стрелки в данном случае) от центра большого круга
    const widthArr1=0.008*diam; // кэф ширины стрелки от введенного числа
    arrow1.setAttribute("stroke","#000000");
    arrow1.setAttribute("x1",cxBigCirc);
    arrow1.setAttribute("x2",cxBigCirc);
    arrow1.setAttribute("y1",cxBigCirc);
    arrow1.setAttribute("y2",cxBigCirc-y2Arr1);
    arrow1.setAttribute("stroke-width",widthArr1);
    arrow1.setAttribute("stroke-linecap","round");
    arrow1.setAttribute("transform","translate (0, 10) rotate("+arrowSec+" "+cxBigCirc+" "+yArrRot+")");
    /*translate 0,10 , 10-из-за того что в rotate когда смещаем, она вся смещается и точка вращение без транслейта будет начало линии */
   
    const min = currTime.getMinutes();
    const arrowMin = 360 / 60 * (min + sec / 60);
    const arrow2=arrows.getElementById('Arrow2');
    const y2Arr2=diam*0.3125; //кэф (длины стрелки в данном случае) от центра большого круга
    const widthArr2=0.02*diam; // кэф ширины стрелки от введенного числа
    arrow2.setAttribute("stroke","#000000");
    arrow2.setAttribute("x1",cxBigCirc);
    arrow2.setAttribute("x2",cxBigCirc);
    arrow2.setAttribute("y1",cxBigCirc);
    arrow2.setAttribute("y2",cxBigCirc-y2Arr2);
    arrow2.setAttribute("stroke-width",widthArr2);
    arrow2.setAttribute("stroke-linecap","round");
    arrow2.setAttribute("transform","translate (0, 10) rotate("+arrowMin+" "+cxBigCirc+" "+yArrRot+")");

    const hour = currTime.getHours();
    const arrowHour = 360 / 12 * (hour + min / 60);
    const arrow3=arrows.getElementById('Arrow3');
    const y2Arr3=diam*0.22; //кэф (длины стрелки в данном случае) от центра большого круга
    const widthArr3=0.03*diam; // кэф ширины стрелки от введенного числа
    arrow3.setAttribute("stroke","#000000");
    arrow3.setAttribute("x1",cxBigCirc);
    arrow3.setAttribute("x2",cxBigCirc);
    arrow3.setAttribute("y1",cxBigCirc);
    arrow3.setAttribute("y2",cxBigCirc-y2Arr3);
    arrow3.setAttribute("stroke-width",widthArr3);
    arrow3.setAttribute("stroke-linecap","round");
    arrow3.setAttribute("transform","translate (0, 10) rotate("+arrowHour+" "+cxBigCirc+" "+yArrRot+")");

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