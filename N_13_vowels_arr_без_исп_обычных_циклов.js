function fGlob() {
  do {
    var name1 = prompt('Введите имя');
  } while (!isNaN(name1));

  function fEach(n) {
    let t = 0;
    let mass = n.split('');
    let wordConst = ["А", "а", "О", "о", "И", "и", "Е", "е", "Ё", "ё", "Э", "э", "Ы", "ы", "У", "у", "Ю", "ю", "Я", "я"];
    mass.forEach(function ff1(v) {
      if (wordConst.includes(v))
        t++;
    });
    return t;
  };
  console.log('Метод forEach:' + ' ' + fEach(name1));

  function fFilter(n1) {
    let wordConst1 = ["А", "а", "О", "о", "И", "и", "Е", "е", "Ё", "ё", "Э", "э", "Ы", "ы", "У", "у", "Ю", "ю", "Я", "я"];
    let mass1 = n1.split('');
    let a2 = mass1.filter(
      function ff2(mass1) {
      return wordConst1.includes(mass1);
    });
    return a2.length;
  };
  console.log('Метод filter:' + ' ' + fFilter(name1));

  function fReduce(n2) {
    let wordConst2 = ["А", "а", "О", "о", "И", "и", "Е", "е", "Ё", "ё", "Э", "э", "Ы", "ы", "У", "у", "Ю", "ю", "Я", "я"];
    let mass2 = n2.split('');
    function ff3(acc, next) {
      if (wordConst2.includes(next))
        return acc + 1;
      else
        return acc;
    };
    return (mass2.reduce(ff3, 0));
  };
  console.log('Метод reduce:' + ' ' + fReduce(name1));
}
fGlob();