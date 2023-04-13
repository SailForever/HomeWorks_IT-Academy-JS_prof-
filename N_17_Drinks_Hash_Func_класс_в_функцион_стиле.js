/*
<input type=button value='Ввод информации о напитке' onclick='newInfo()'>
<input type=button value='Получение информации о напитке' onclick='getInfo()'>
<input type=button value='Удаление информации о напитке' onclick='deleteInfo()'>
<input type=button value='Перечень всех напитков' onclick='allInfo()'>
*/

function HashStorageFunc(){
  var self=this;

  self.store={};

  self.addValue=function (key,value){
    self.store[key]=value;
  }

  self.getValue=function (key){
    return self.store[key]
  }

  self.deleteValue=function (key){
    if (key in self.store) {
      delete self.store[key];
      return true;
    }
    else
      return false;
  }

  self.getKeys=function (){
    let a1=[];
    for (var key in self.store)
        a1.push(key)
    return a1;
  }
}

var drinkStorage=new HashStorageFunc;

function newInfo(){
  let nameDr=prompt('Название');
  let alcoDr=confirm('Алкогольный? Ок-да, отмена- нет');
  let alcoDrRus;
  if (alcoDr==true)
    alcoDrRus='Да';
  else
    alcoDrRus='Нет';
  let recepDr=prompt('Рецепт его?');
  drinkStorage.addValue(nameDr,{a:alcoDrRus,r:recepDr});
}

function getInfo(){
  let nameDr=prompt('Название');
  let info=drinkStorage.getValue(nameDr);
  if (info==undefined)
    return console.log('Такого напитка не существует');
  else
    return console.log(
      'Напиток: '+nameDr+'\n'+
      'Алкогольный: '+info.a+'\n'+
      'Рецепт: '+info.r)
}

function deleteInfo(){
  let nameDr=prompt('Название');
  let info=drinkStorage.deleteValue(nameDr)
  if (info==true)
    return console.log('Удален напиток: '+nameDr)
  else
    return console.log('Такого напитка не существует: '+nameDr)
}

function allInfo(){
  console.log(drinkStorage.getKeys())
}