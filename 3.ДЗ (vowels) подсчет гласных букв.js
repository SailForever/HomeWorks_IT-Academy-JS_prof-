do {
  var name1=prompt('Введите имя');
} while (!isNaN(name1));

function f(a){
  var t=0;
  var wordConst=["А","а","О","о","И","и","Е","е","Ё","ё","Э","э","Ы","ы","У","у","Ю","ю","Я","я"];
  for (var i=0; i<a.length; i++){
    var b=a[i];
    if (wordConst.indexOf(b)>=0)
      t++;
  }
return t;
}

console.log (f(name1));