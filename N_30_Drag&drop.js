/*
<img src='http://fe.it-academy.by/Sites/0000007/sax.jpg'>
<img src='http://fe.it-academy.by/Sites/0000007/Yin_and_Yang.png' width=100>
<img src='http://fe.it-academy.by/Sites/0000007/Man-and-woman.png' width=150>
<img src='http://fe.it-academy.by/Sites/0000007/No_smoking.png' style='padding-left: 50px'></img>
*/

window.onload = predLoad;
function predLoad() {
  var image = document.getElementsByTagName('img');
  for (let i = 0; i < image.length; i++) {
    image[i].style.left = image[i].offsetLeft + 'px';
    image[i].style.top = image[i].offsetTop + 'px';

  }
  for (let i = 0; i < image.length; i++) {
    image[i].style.position = 'absolute';
    image[i].addEventListener('mousedown', mouseDownImg)
  }

  let shiftX;
  let shiftY;
  let moveImg;
  let imgIndexZ = 10;
  function mouseDownImg(eo) {
    eo = eo || window.event;
    eo.preventDefault();
    console.log('down')
    let img = eo.target;
    shiftX = eo.pageX - img.offsetLeft;
    shiftY = eo.pageY - img.offsetTop;
    moveImg = img;
    moveImg.style.zIndex = imgIndexZ++;
    moveImg.style.cursor = 'pointer';
    window.addEventListener('mousemove', mouseMoveImg);
    window.addEventListener('mouseup', mouseUpImg);
  }

  function mouseMoveImg(eo) {
    eo = eo || window.event;
    eo.preventDefault();
    console.log('move');
    moveImg.style.top = (eo.pageY - shiftY) + 'px';
    moveImg.style.left = (eo.pageX - shiftX) + 'px';
  }

  function mouseUpImg(eo) {
    eo = eo || window.event;
    eo.preventDefault();
    moveImg.style.cursor = 'auto';
    console.log('up');
    window.removeEventListener('mousemove', mouseMoveImg);
    window.removeEventListener('mouseup', mouseUpImg);
  }
}