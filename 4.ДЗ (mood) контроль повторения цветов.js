function randomDip(n,m) {
  return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
const colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
console.log( 'цветов: ' + colorsCount );
var a1={};
for ( let i=1; i<=colorsCount; i++ ) {
    do {
      var n=randomDip(1,7);
    } while (n in a1)
  a1[n]=true;
  var colorName=colors[n];
  console.log(colorName);
}
}

mood(3);